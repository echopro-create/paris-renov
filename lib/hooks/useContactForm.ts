import { useState, useEffect, useActionState } from 'react';
import emailjs from '@emailjs/browser';
import { content } from '../../constants';
import { isValidFrenchPhone } from '../utils/phoneValidator';

interface FormState {
    success: boolean;
    error: boolean;
    errors: Record<string, string>;
    message?: string;
}

const initialState: FormState = {
    success: false,
    error: false,
    errors: {},
};

export function useContactForm() {
    const { contact } = content;
    // We still need local state for controlled inputs (phone formatting)
    const [phone, setPhone] = useState('');

    // Initialize EmailJS
    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init({
                publicKey: publicKey,
            });
        }
    }, []);

    const submitAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            type: formData.get('type') as string,
            message: formData.get('message') as string,
            token: formData.get('cf-turnstile-response') as string,
        };

        // Validation
        const errors: Record<string, string> = {};
        if (!data.name?.trim()) errors.name = contact.form.errors.name;
        if (!data.email?.trim()) errors.email = contact.form.errors.email;
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = contact.form.errors.emailInvalid;

        if (!data.phone?.trim()) {
            errors.phone = contact.form.errors.phone;
        } else if (!isValidFrenchPhone(data.phone)) {
            errors.phone = 'Numéro invalide. Ex: 06 12 34 56 78';
        }

        if (!data.message?.trim()) errors.message = contact.form.errors.message;

        // Turnstile check: block submission if key is present but token is missing
        if (import.meta.env.VITE_TURNSTILE_SITE_KEY && !data.token) {
            errors.phone = 'Veuillez compléter la vérification de sécurité';
        }

        if (Object.keys(errors).length > 0) {
            return { success: false, error: false, errors };
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        if (!serviceId || !templateId) {
            console.error('EmailJS Service ID or Template ID is missing.');
            return { success: false, error: true, errors: {}, message: 'Configuration error' };
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    phone: data.phone,
                    project_type: data.type || 'Non spécifié',
                    message: data.message,
                    'g-recaptcha-response': data.token, // EmailJS supports this often
                }
            );

            // Clear phone on success
            setPhone('');
            return { success: true, error: false, errors: {} };
        } catch (error) {
            console.error('Form submission error:', error);
            return { success: false, error: true, errors: {}, message: 'Network error' };
        }
    };

    const [state, formAction, isPending] = useActionState(submitAction, initialState);

    const handlePhoneChange = (value: string) => {
        const sanitized = value.replace(/[^\d\s+().-]/g, '');
        setPhone(sanitized);
    };

    return {
        state,
        formAction,
        isPending,
        phone,
        handlePhoneChange,
        isValidFrenchPhone
    };
}

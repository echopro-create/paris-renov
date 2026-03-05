import { useState, useActionState } from 'react';
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
    const [phone, setPhone] = useState('');

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

        // Turnstile check
        if (import.meta.env.VITE_TURNSTILE_SITE_KEY && !data.token) {
            errors.phone = 'Veuillez compléter la vérification de sécurité';
        }

        if (Object.keys(errors).length > 0) {
            return { success: false, error: false, errors };
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    type: data.type || 'Non spécifié',
                    message: data.message,
                }),
            });

            if (!response.ok) {
                const err = await response.json().catch(() => ({}));
                console.error('Contact API error:', err);
                return { success: false, error: true, errors: {}, message: 'Erreur serveur' };
            }

            setPhone('');
            return { success: true, error: false, errors: {} };
        } catch (error) {
            console.error('Network error:', error);
            return { success: false, error: true, errors: {}, message: 'Erreur réseau' };
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

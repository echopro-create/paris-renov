import { useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { content } from '../../constants';
import { isValidFrenchPhone } from '../utils/phoneValidator';

export function useContactForm() {
    const { contact } = content;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    // Initialize EmailJS
    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init({
                publicKey: publicKey,
            });
        }
    }, []);

    const validate = () => {
        const e: Record<string, string> = {};
        if (!formData.name.trim()) e.name = contact.form.errors.name;
        if (!formData.email.trim()) e.email = contact.form.errors.email;
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = contact.form.errors.emailInvalid;
        if (!formData.phone.trim()) {
            e.phone = contact.form.errors.phone;
        } else if (!isValidFrenchPhone(formData.phone)) {
            e.phone = 'Numéro invalide. Ex: 06 12 34 56 78 ou +33 6 12 34 56 78';
        }
        if (!formData.message.trim()) e.message = contact.form.errors.message;
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setIsError(false);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        if (!serviceId || !templateId) {
            console.error('EmailJS Service ID or Template ID is missing.');
            setIsError(true);
            setIsSubmitting(false);
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    project_type: formData.type || 'Non spécifié',
                    message: formData.message,
                }
            );

            setIsSuccess(true);
            setFormData({ name: '', email: '', phone: '', type: '', message: '' });
        } catch (error) {
            console.error('Form submission error:', error);
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePhoneChange = (value: string) => {
        // Allow only digits, spaces, +, -, (, )
        const sanitized = value.replace(/[^\d\s+().-]/g, '');
        setFormData({ ...formData, phone: sanitized });

        // Clear error when user starts typing
        if (errors.phone) {
            setErrors({ ...errors, phone: '' });
        }
    };

    const clearErrors = (field: string) => {
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' });
        }
    };

    return {
        formData,
        setFormData,
        errors,
        setErrors,
        isSubmitting,
        isSuccess,
        isError,
        setIsError,
        handleSubmit,
        handlePhoneChange,
        clearErrors,
        isValidFrenchPhone
    };
}

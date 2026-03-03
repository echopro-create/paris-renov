import { motion } from 'framer-motion';
import { content } from '../constants';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { formatPhoneForDisplay } from '../lib/utils/phoneValidator';
import { useContactForm } from '../lib/hooks/useContactForm';
import { Turnstile } from '@marsidev/react-turnstile';

/**
 * EmailJS Configuration Guide:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Add a new Email Service (e.g., Gmail) -> Get Service ID
 * 3. Create an Email Template -> Get Template ID
 *    - Configure template variables: {{from_name}}, {{from_email}}, {{phone}}, {{project_type}}, {{message}}
 * 4. Go to Account > API Keys -> Get Public Key
 * 5. Add these keys to your .env.local file:
 *    VITE_EMAILJS_SERVICE_ID=...
 *    VITE_EMAILJS_TEMPLATE_ID=...
 *    VITE_EMAILJS_PUBLIC_KEY=...
 *    VITE_TURNSTILE_SITE_KEY=...
 */

export default function Contact() {
  const { contact } = content;
  const {
    state,
    formAction,
    isPending,
    phone,
    handlePhoneChange,
    isValidFrenchPhone
  } = useContactForm();

  const { success, error, errors } = state;

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 dark:bg-gold-500/20 mb-6">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">{contact.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info (left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-gold-400/50 transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gold-500/10 dark:bg-gold-500/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">{contact.info.labels.phone}</div>
                <a href={`tel:${contact.info.phone.replace(/\s/g, '')}`} className="text-slate-600 dark:text-slate-300 text-sm hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                  {contact.info.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-gold-400/50 transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gold-500/10 dark:bg-gold-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">{contact.info.labels.email}</div>
                <a href={`mailto:${contact.info.email}`} className="text-slate-600 dark:text-slate-300 text-sm hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                  {contact.info.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-gold-400/50 transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gold-500/10 dark:bg-gold-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">{contact.info.labels.address}</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{contact.info.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-gold-400/50 transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gold-500/10 dark:bg-gold-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">Horaires</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{contact.info.hours}</p>
              </div>
            </div>
          </motion.div>

          {/* Form (right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-1">{contact.formHeading}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{contact.formSubheading}</p>

              {success ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{contact.form.success}</p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Une erreur est survenue</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    {state.message || "Nous n'avons pas pu envoyer votre demande. Veuillez réessayer."}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-gold-500 text-slate-900 rounded-full font-semibold text-sm hover:bg-gold-400 transition-all"
                  >
                    Réessayer
                  </button>
                </div>
              ) : (
                <form action={formAction} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="sr-only">{contact.form.name}</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder={contact.form.name}
                        aria-invalid={!!errors?.name}
                        aria-describedby={errors?.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors?.name ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'} focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm text-slate-900 dark:text-white transition-colors`}
                      />
                      {errors?.name && <p id="name-error" role="alert" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="sr-only">{contact.form.email}</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder={contact.form.email}
                        aria-invalid={!!errors?.email}
                        aria-describedby={errors?.email ? "email-error" : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors?.email ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'} focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm text-slate-900 dark:text-white transition-colors`}
                      />
                      {errors?.email && <p id="email-error" role="alert" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="sr-only">{contact.form.phone}</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder={contact.form.phone}
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        aria-invalid={!!errors?.phone}
                        aria-describedby={errors?.phone ? "phone-error" : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors?.phone ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'} focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm text-slate-900 dark:text-white transition-colors font-mono`}
                        inputMode="tel"
                        autoComplete="tel"
                      />
                      {errors?.phone && <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      {!errors?.phone && phone && isValidFrenchPhone(phone) && (
                        <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {formatPhoneForDisplay(phone)}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-type" className="sr-only">{contact.form.type}</label>
                      <select
                        id="contact-type"
                        name="type"
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm text-slate-900 dark:text-white transition-colors text-slate-600 dark:text-slate-300"
                      >
                        <option value="">{contact.form.type}</option>
                        <option value="full">{contact.form.options.full}</option>
                        <option value="painting">{contact.form.options.painting}</option>
                        <option value="plumbing">{contact.form.options.plumbing}</option>
                        <option value="flooring">{contact.form.options.flooring}</option>
                        <option value="other">{contact.form.options.other}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="sr-only">{contact.form.message}</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder={contact.form.message}
                      rows={4}
                      aria-invalid={!!errors?.message}
                      aria-describedby={errors?.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border ${errors?.message ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'} focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm text-slate-900 dark:text-white transition-colors resize-none`}
                    />
                    {errors?.message && <p id="message-error" role="alert" className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Turnstile Widget */}
                    {import.meta.env.VITE_TURNSTILE_SITE_KEY && (
                      <div className="flex justify-center sm:justify-start">
                        <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} />
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-full font-semibold text-sm hover:bg-gold-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isPending ? (
                        contact.form.submitting
                      ) : (
                        <>
                          {contact.form.submit}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
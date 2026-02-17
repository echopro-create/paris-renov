import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { content } from '../constants';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
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

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = contact.form.errors.name;
    if (!formData.email.trim()) e.email = contact.form.errors.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = contact.form.errors.emailInvalid;
    if (!formData.phone.trim()) e.phone = contact.form.errors.phone;
    if (!formData.message.trim()) e.message = contact.form.errors.message;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      // Supabase integration placeholder
      await new Promise((r) => setTimeout(r, 1500));
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', type: '', message: '' });
    } catch {
      // handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 dark:bg-gold-500/20 mb-6">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">{contact.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info (left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-gold-400/50 transition-colors">
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

            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-gold-400/50 transition-colors">
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

            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-gold-400/50 transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gold-500/10 dark:bg-gold-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">{contact.info.labels.address}</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{contact.info.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-gold-400/50 transition-colors">
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

              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-slate-900">{contact.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder={contact.form.name}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.name ? 'border-red-400' : 'border-slate-200'} focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm transition-colors`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={contact.form.email}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.email ? 'border-red-400' : 'border-slate-200'} focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm transition-colors`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        placeholder={contact.form.phone}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.phone ? 'border-red-400' : 'border-slate-200'} focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm transition-colors`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm transition-colors text-slate-600"
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
                    <textarea
                      placeholder={contact.form.message}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.message ? 'border-red-400' : 'border-slate-200'} focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-sm transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-xl font-semibold text-sm hover:bg-gold-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      contact.form.submitting
                    ) : (
                      <>
                        {contact.form.submit}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { ContentData } from '../types';
import { Phone, Mail, MapPin, Clock, AlertCircle, ArrowRight } from 'lucide-react';

interface ContactProps {
  content: ContentData['contact'];
  common: ContentData['common'];
}

const Contact: React.FC<ContactProps> = ({ content, common }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: content.form.options.full,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = content.form.errors.name;
    if (!formData.email.trim()) newErrors.email = content.form.errors.email;
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = content.form.errors.emailInvalid;
    if (!formData.phone.trim()) newErrors.phone = content.form.errors.phone;
    if (!formData.message.trim()) newErrors.message = content.form.errors.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[\d\s+]*$/.test(value)) {
      setFormData({ ...formData, phone: value });
      if (errors.phone) setErrors({ ...errors, phone: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', type: content.form.options.full, message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/30 -skew-x-12 translate-x-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">

          <div className="lg:w-5/12 pt-10">
            <div className="inline-block px-3 py-1 bg-gold-500/10 text-gold-500 text-xs font-bold uppercase tracking-widest rounded mb-6">{common.contactBadge}</div>
            <h3 className="font-serif text-5xl font-bold mb-6 leading-tight">{content.title}</h3>
            <p className="text-slate-400 text-lg mb-12 max-w-md">{content.subtitle}</p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-1">{content.info.labels.phone}</h4>
                  <a href={`tel:${content.info.phone.replace(/\s/g, '')}`} className="text-2xl font-serif hover:text-gold-500 transition-colors">{content.info.phone}</a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-1">{content.info.labels.email}</h4>
                  <a href={`mailto:${content.info.email}`} className="text-xl hover:text-gold-500 transition-colors">{content.info.email}</a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-slate-400 uppercase tracking-wide mb-1">{content.info.labels.address}</h4>
                  <p className="text-lg text-slate-300 max-w-xs">{content.info.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-white rounded-2xl p-10 md:p-14 shadow-2xl text-slate-900">
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full pt-6 pb-2 border-b-2 outline-none transition-all bg-transparent ${errors.name ? 'border-red-500' : 'border-slate-200 focus:border-gold-500'}`}
                    />
                    <label htmlFor="name" className="absolute left-0 top-6 text-slate-500 transition-all peer-focus:text-xs peer-focus:-top-1 peer-focus:text-gold-500 peer-placeholder-shown:text-base peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:-top-1">
                      {content.form.name}
                    </label>
                    {errors.name && <p className="text-red-500 text-xs mt-1 absolute">{errors.name}</p>}
                  </div>

                  <div className="relative group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder=" "
                      className={`peer w-full pt-6 pb-2 border-b-2 outline-none transition-all bg-transparent ${errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-gold-500'}`}
                    />
                    <label htmlFor="phone" className="absolute left-0 top-6 text-slate-500 transition-all peer-focus:text-xs peer-focus:-top-1 peer-focus:text-gold-500 peer-placeholder-shown:text-base peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:-top-1">
                      {content.form.phone}
                    </label>
                    {errors.phone && <p className="text-red-500 text-xs mt-1 absolute">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full pt-6 pb-2 border-b-2 outline-none transition-all bg-transparent ${errors.email ? 'border-red-500' : 'border-slate-200 focus:border-gold-500'}`}
                    />
                    <label htmlFor="email" className="absolute left-0 top-6 text-slate-500 transition-all peer-focus:text-xs peer-focus:-top-1 peer-focus:text-gold-500 peer-placeholder-shown:text-base peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:-top-1">
                      {content.form.email}
                    </label>
                    {errors.email && <p className="text-red-500 text-xs mt-1 absolute">{errors.email}</p>}
                  </div>

                  <div className="relative group">
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full pt-6 pb-2 border-b-2 border-slate-200 focus:border-gold-500 outline-none transition-all bg-transparent text-slate-700"
                    >
                      <option>{content.form.options.full}</option>
                      <option>{content.form.options.painting}</option>
                      <option>{content.form.options.plumbing}</option>
                      <option>{content.form.options.flooring}</option>
                      <option>{content.form.options.other}</option>
                    </select>
                    <label htmlFor="type" className="absolute left-0 -top-1 text-xs text-gold-500">
                      {content.form.type}
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full pt-6 pb-2 border-b-2 outline-none transition-all bg-transparent resize-none ${errors.message ? 'border-red-500' : 'border-slate-200 focus:border-gold-500'}`}
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-6 text-slate-500 transition-all peer-focus:text-xs peer-focus:-top-1 peer-focus:text-gold-500 peer-placeholder-shown:text-base peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:-top-1">
                    {content.form.message}
                  </label>
                  {errors.message && <p className="text-red-500 text-xs mt-1 absolute">{errors.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full py-4 rounded-sm font-bold text-white transition-all shadow-xl flex items-center justify-center gap-3 uppercase tracking-wider text-sm ${isSuccess
                      ? 'bg-green-600'
                      : 'bg-slate-900 hover:bg-gold-500 hover:shadow-gold-500/30'
                      }`}
                  >
                    {isSubmitting ? content.form.submitting : isSuccess ? content.form.success : (
                      <>
                        {content.form.submit}
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
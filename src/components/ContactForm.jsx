import { useState } from 'react'
import { useLocale } from '../context/LocaleContext'

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-portal-blue/40 focus:border-portal-blue transition-colors'

export default function ContactForm() {
  const { t } = useLocale()
  const [form, setForm] = useState({ company: '', contact_name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSuccess(false)
    const formEl = e.target
    const formData = new URLSearchParams()
    formData.append('form-name', 'business-contact')
    formData.append('company', form.company.trim())
    formData.append('contact_name', form.contact_name.trim())
    formData.append('email', form.email.trim())
    formData.append('message', form.message.trim())

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ company: '', contact_name: '', email: '', message: '' })
      }
    } catch (_) {}
    setSubmitting(false)
  }

  return (
    <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
      <form
        name="business-contact"
        method="POST"
        data-netlify="true"
        netlify="true"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input type="hidden" name="form-name" value="business-contact" />
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1.5">
            {t('companyLabel')}
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            required
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            className={INPUT_CLASS}
            placeholder={t('companyPlaceholder')}
            disabled={submitting}
          />
        </div>
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
            {t('contactLabel')}
          </label>
          <input
            id="contact-name"
            type="text"
            name="contact_name"
            required
            value={form.contact_name}
            onChange={(e) => setForm((f) => ({ ...f, contact_name: e.target.value }))}
            className={INPUT_CLASS}
            placeholder={t('contactPlaceholder')}
            disabled={submitting}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
            {t('emailLabel')}
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={INPUT_CLASS}
            placeholder="example@company.com"
            disabled={submitting}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
            {t('messageLabel')}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className={`${INPUT_CLASS} resize-none`}
            placeholder={t('messagePlaceholder')}
            disabled={submitting}
          />
        </div>
        {success && (
          <p className="text-green-700 text-sm font-medium bg-green-50 rounded-lg px-4 py-3">
            {t('contactFormSuccess')}
          </p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 rounded-lg bg-portal-blue text-white font-medium hover:bg-portal-blue/90 focus:outline-none focus:ring-2 focus:ring-portal-blue/50 focus:ring-offset-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting ? t('contactFormSending') : t('submitApply')}
        </button>
      </form>
    </div>
  )
}

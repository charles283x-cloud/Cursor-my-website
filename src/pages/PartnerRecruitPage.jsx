import { useState } from 'react'
import { Handshake, CheckCircle, Building2, Users, FileCheck } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'

export default function PartnerRecruitPage() {
  const [form, setForm] = useState({ company: '', contact_name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('') // '' | 'success' | 'error'
  const { t } = useLocale()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setStatus('')

    const newErrors = {}
    if (!form.company.trim()) newErrors.company = t('errCompany')
    if (!form.contact_name.trim()) newErrors.contact_name = t('errContact')
    if (!form.email.trim()) newErrors.email = t('errEmail')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = t('errEmailInvalid')
    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }

    try {
      const res = await fetch('/api/partner-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ company: '', contact_name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
        if (data.errors) {
          const errMap = {}
          data.errors.forEach((err) => { errMap[err.path] = err.msg })
          setErrors(errMap)
        }
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-semibold text-slate-800 mb-8">{t('partnersTitle')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-lg font-medium text-slate-800 mb-3 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-portal-blue" />
                {t('introTitle')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t('introText')}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-slate-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-portal-blue" />
                {t('advantageTitle')}
              </h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex gap-2"><Building2 className="w-4 h-4 shrink-0 mt-0.5" /> {t('advantage1')}</li>
                <li className="flex gap-2"><Users className="w-4 h-4 shrink-0 mt-0.5" /> {t('advantage2')}</li>
                <li className="flex gap-2"><FileCheck className="w-4 h-4 shrink-0 mt-0.5" /> {t('advantage3')}</li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-medium text-slate-800 mb-4">{t('formTitle')}</h2>

              {status === 'success' && (
                <div className="mb-4 p-3 bg-green-50 text-green-800 rounded-lg text-sm">
                  {t('submitSuccess')}
                </div>
              )}
              {status === 'error' && (
                <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-lg text-sm">
                  {t('submitError')}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('companyLabel')}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30 ${errors.company ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder={t('companyPlaceholder')}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('contactLabel')}</label>
                  <input
                    type="text"
                    value={form.contact_name}
                    onChange={(e) => setForm((f) => ({ ...f, contact_name: e.target.value }))}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30 ${errors.contact_name ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder={t('contactPlaceholder')}
                  />
                  {errors.contact_name && <p className="text-red-500 text-xs mt-1">{errors.contact_name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('emailLabel')}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30 ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="example@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('phoneLabel')}</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30"
                    placeholder={t('phonePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('messageLabel')}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-portal-blue/30 resize-none"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-portal-blue text-white font-medium rounded-lg hover:bg-portal-blue-light transition-colors"
                >
                  {t('submitApply')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

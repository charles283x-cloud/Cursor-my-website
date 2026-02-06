import { useLocale } from '../context/LocaleContext'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  const { t } = useLocale()
  return (
    <main className="flex-1 bg-slate-50/50 min-h-[60vh]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">{t('bizContact')}</h1>
        <p className="text-slate-600 text-sm mb-8">{t('bizContactDesc')}</p>
        <ContactForm />
      </div>
    </main>
  )
}

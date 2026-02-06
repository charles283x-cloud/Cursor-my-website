import { Link } from 'react-router-dom'
import { FileDown, Mail, ChevronRight } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'

const TOPIC_KEYS = ['topic1', 'topic2', 'topic3', 'topic4']

export default function Sidebar() {
  const { t } = useLocale()
  return (
    <aside className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <h2 className="text-base font-semibold text-slate-800 px-4 py-3 bg-slate-50 border-b border-slate-200">
          {t('topicTitle')}
        </h2>
        <ul className="divide-y divide-slate-100">
          {TOPIC_KEYS.map((key) => (
            <li key={key}>
              <a
                href="#"
                className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-portal-blue transition-colors"
              >
                {t(key)}
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        <a
          href="#"
          className="flex items-center gap-4 p-4 bg-portal-blue rounded-lg text-white hover:bg-portal-blue-light transition-colors group"
        >
          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
            <FileDown className="w-6 h-6" />
          </div>
          <div>
            <div className="font-medium">{t('whitepaper')}</div>
            <div className="text-white/80 text-sm">{t('whitepaperDesc')}</div>
          </div>
          <ChevronRight className="w-5 h-5 ml-auto shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <Link
          to="/contact"
          className="flex items-center gap-4 p-4 bg-white border-2 border-portal-blue rounded-lg text-portal-blue hover:bg-portal-blue/5 transition-colors group"
        >
          <div className="w-12 h-12 rounded-lg bg-portal-blue/10 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <div className="font-medium">{t('bizContact')}</div>
            <div className="text-slate-600 text-sm">{t('bizContactDesc')}</div>
          </div>
          <ChevronRight className="w-5 h-5 ml-auto shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </aside>
  )
}

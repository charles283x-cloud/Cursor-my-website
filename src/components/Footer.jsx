import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'

const FOOTER_LINK_KEYS = [
  { key: 'navHome', href: '/' },
  { key: 'navProjects', href: '/projects' },
  { key: 'navNews', href: '/news' },
  { key: 'navPartners', href: '/partners' },
]

const SOCIAL_KEYS = ['wechat', 'weibo']

export default function Footer() {
  const { t } = useLocale()
  return (
    <footer className="bg-portal-blue text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">{t('companyName')}</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {FOOTER_LINK_KEYS.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t('contactUs')}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href={`mailto:${t('contactEmail')}`} className="hover:text-white transition-colors">{t('contactEmail')}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{t('footerAddress')}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">{t('followUs')}</h3>
            <div className="flex gap-3">
              {SOCIAL_KEYS.map((name) => (
                <div
                  key={name}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition-colors cursor-pointer"
                  title={t(name)}
                >
                  {t(name).slice(0, 1)}
                </div>
              ))}
              <div
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition-colors cursor-pointer"
                title="LinkedIn"
              >
                L
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} {t('companyName')} · {t('copyright')}
        </div>
      </div>
    </footer>
  )
}

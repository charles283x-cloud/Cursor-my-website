import { Link, useNavigate } from 'react-router-dom'
import { Search, LogIn } from 'lucide-react'
import { useState } from 'react'
import { useLocale } from '../context/LocaleContext'

const NAV_KEYS = [
  { key: 'navHome', href: '/' },
  { key: 'navProjects', href: '/projects' },
  { key: 'navNews', href: '/news' },
  { key: 'navPartners', href: '/partners' },
]

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const { locale, setLocale, t } = useLocale()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) navigate(`/projects?q=${encodeURIComponent(searchQuery.trim())}`)
  }

  return (
    <header className="bg-portal-blue w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <Link to="/" className="text-white font-bold text-lg whitespace-nowrap shrink-0">
              {t('siteName')}
            </Link>
            <form onSubmit={handleSearch} className="flex-1 lg:flex-initial lg:w-48 xl:w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded bg-portal-blue-light/50 border border-white/20 text-white placeholder-slate-300 text-sm focus:outline-none focus:border-white/40"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <nav className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {NAV_KEYS.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded text-sm transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>
            <div className="flex items-center border border-white/30 rounded overflow-hidden shrink-0">
              <button
                type="button"
                onClick={() => setLocale('zh')}
                className={`px-3 py-1.5 text-sm transition-colors ${locale === 'zh' ? 'bg-white/25 text-white font-medium' : 'text-white/80 hover:bg-white/10'}`}
                title="中文"
              >
                中文
              </button>
              <button
                type="button"
                onClick={() => setLocale('ja')}
                className={`px-3 py-1.5 text-sm transition-colors ${locale === 'ja' ? 'bg-white/25 text-white font-medium' : 'text-white/80 hover:bg-white/10'}`}
                title="日本語"
              >
                日本語
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 text-white rounded text-sm font-medium transition-colors shrink-0">
              <LogIn className="w-4 h-4" />
              {t('loginRegister')}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

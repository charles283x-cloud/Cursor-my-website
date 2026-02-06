import { Link, useNavigate } from 'react-router-dom'
import { Search, LogIn } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '项目信息', href: '/projects' },
  { label: '新闻动态', href: '/news' },
  { label: '招募合作伙伴', href: '/partners' },
]

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

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
              日本储能项目门户
            </Link>
            <form onSubmit={handleSearch} className="flex-1 lg:flex-initial lg:w-48 xl:w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="搜索项目..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded bg-portal-blue-light/50 border border-white/20 text-white placeholder-slate-300 text-sm focus:outline-none focus:border-white/40"
                />
              </div>
            </form>
          </div>
          <nav className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 text-white rounded text-sm font-medium transition-colors shrink-0">
            <LogIn className="w-4 h-4" />
            登录 / 注册
          </button>
        </div>
      </div>
    </header>
  )
}

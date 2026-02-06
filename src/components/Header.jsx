import { Search, LogIn } from 'lucide-react'

const NAV_LINKS = [
  { label: '首页', href: '#' },
  { label: '项目概况', href: '#project' },
  { label: '核心指标', href: '#figures' },
  { label: '技术方案', href: '#tech' },
  { label: '新闻动态', href: '#news' },
  { label: '联系我们', href: '#contact' },
]

export default function Header() {
  return (
    <header className="bg-portal-blue w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <a href="#" className="text-white font-bold text-lg whitespace-nowrap shrink-0">
              日本储能项目门户
            </a>
            <div className="flex-1 lg:flex-initial lg:w-48 xl:w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="搜索..."
                  className="w-full pl-9 pr-3 py-2 rounded bg-portal-blue-light/50 border border-white/20 text-white placeholder-slate-300 text-sm focus:outline-none focus:border-white/40"
                />
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded text-sm transition-colors"
              >
                {link.label}
              </a>
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

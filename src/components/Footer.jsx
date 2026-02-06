import { Mail, MapPin } from 'lucide-react'

const FOOTER_LINKS = [
  { label: '首页', href: '#' },
  { label: '项目概况', href: '#project' },
  { label: '核心指标', href: '#figures' },
  { label: '技术方案', href: '#tech' },
  { label: '新闻动态', href: '#news' },
  { label: '联系我们', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-portal-blue text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">日本储能项目门户</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              聚焦日本储能产业，提供项目资讯、技术解析与行业洞察，助力能源转型与电网稳定。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">快速链接</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">联系我们</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                contact@example.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>日本茨城县 · 关东地区项目办公室</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">关注我们</h3>
            <div className="flex gap-3">
              {['微信', '微博', 'LinkedIn'].map((name) => (
                <div
                  key={name}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition-colors cursor-pointer"
                  title={name}
                >
                  {name.slice(0, 1)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} 日本储能项目门户 · 版权所有
        </div>
      </div>
    </footer>
  )
}

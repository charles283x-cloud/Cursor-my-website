import { FileDown, Mail, ChevronRight } from 'lucide-react'

const TOPICS = [
  { label: '全钒液流电池技术解析', href: '#' },
  { label: 'EMS 能量管理系统优势', href: '#' },
  { label: '储能电站安全设计要点', href: '#' },
  { label: '电网调频市场机制浅析', href: '#' },
]

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <h2 className="text-base font-semibold text-slate-800 px-4 py-3 bg-slate-50 border-b border-slate-200">
          技术亮点专题
        </h2>
        <ul className="divide-y divide-slate-100">
          {TOPICS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-portal-blue transition-colors"
              >
                {item.label}
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
            <div className="font-medium">项目白皮书下载</div>
            <div className="text-white/80 text-sm">获取完整技术方案</div>
          </div>
          <ChevronRight className="w-5 h-5 ml-auto shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <a
          href="mailto:contact@example.com"
          className="flex items-center gap-4 p-4 bg-white border-2 border-portal-blue rounded-lg text-portal-blue hover:bg-portal-blue/5 transition-colors group"
        >
          <div className="w-12 h-12 rounded-lg bg-portal-blue/10 flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <div className="font-medium">商务合作联系</div>
            <div className="text-slate-600 text-sm">洽谈合作与咨询</div>
          </div>
          <ChevronRight className="w-5 h-5 ml-auto shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </aside>
  )
}

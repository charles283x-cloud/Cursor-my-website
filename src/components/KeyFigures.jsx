import { Zap, Battery, ShieldCheck, Calendar } from 'lucide-react'

const FIGURES = [
  { value: '50 MW', label: '装机容量', icon: Zap },
  { value: '100 MWh', label: '储能容量', icon: Battery },
  { value: 'JIS 认证', label: '地震安全认证', icon: ShieldCheck },
  { value: '2026 Q4', label: '预计投运', icon: Calendar },
]

export default function KeyFigures() {
  return (
    <section id="figures" className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-portal-blue w-fit">
        项目核心数据
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {FIGURES.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-3 hover:shadow-md hover:border-portal-blue/30 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-portal-blue/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-portal-blue" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-portal-blue">{value}</div>
              <div className="text-slate-600 text-xs sm:text-sm">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

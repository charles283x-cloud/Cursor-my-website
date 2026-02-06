import { Zap, Battery, ShieldCheck, Calendar } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'

const FIGURE_KEYS = [
  { value: '50 MW', labelKey: 'capacity', icon: Zap },
  { value: '100 MWh', labelKey: 'storageCapacity', icon: Battery },
  { value: 'JIS 认证', labelKey: 'safetyCert', icon: ShieldCheck },
  { value: '2026 Q4', labelKey: 'expectedOp', icon: Calendar },
]

export default function KeyFigures() {
  const { t } = useLocale()
  return (
    <section id="figures" className="mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b-2 border-portal-blue w-fit">
        {t('figuresTitle')}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {FIGURE_KEYS.map(({ value, labelKey, icon: Icon }) => (
          <div
            key={labelKey}
            className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-3 hover:shadow-md hover:border-portal-blue/30 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-portal-blue/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-portal-blue" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-portal-blue">{value}</div>
              <div className="text-slate-600 text-xs sm:text-sm">{t(labelKey)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { useLocale } from '../context/LocaleContext'

export default function Hero() {
  const { t } = useLocale()
  return (
    <section className="relative w-full aspect-[3/1] min-h-[200px] sm:min-h-[280px] overflow-hidden bg-slate-900">
      <img
        src="/hero-bg.png"
        alt={t('heroAlt')}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-snug mb-3 drop-shadow">
            {t('heroTitle')}
          </h2>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-medium text-sm rounded transition-colors"
          >
            {t('viewDetail')}
          </a>
        </div>
      </div>
    </section>
  )
}

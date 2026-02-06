import { Link } from 'react-router-dom'
import NewsCard from './NewsCard'
import { useLocale } from '../context/LocaleContext'
import newsData from '../data/news.json'

export default function LatestNews() {
  const { t } = useLocale()
  const news = Array.isArray(newsData) ? newsData.slice(0, 3) : []

  return (
    <section id="news" className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-800 pb-2 border-b-2 border-portal-blue w-fit">
          {t('latestNews')}
        </h2>
        <Link to="/news" className="text-sm text-portal-blue hover:underline">{t('more')}</Link>
      </div>
      {news.length === 0 ? (
        <p className="text-slate-500 text-sm py-4">{t('noNews')}</p>
      ) : (
        <div className="divide-y divide-slate-100">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image || 'https://picsum.photos/200/150'}
              title={item.title}
              date={item.published_at}
              href={`/news/${item.id}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

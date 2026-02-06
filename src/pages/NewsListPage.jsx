import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import newsData from '../data/news.json'
import { useLocale } from '../context/LocaleContext'

export default function NewsListPage() {
  const { t } = useLocale()
  return (
    <main className="flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">{t('newsTitle')}</h1>

        {newsData.length === 0 ? (
          <p className="text-slate-500 py-8">{t('noNews')}</p>
        ) : (
          <div className="divide-y divide-slate-100">
            {newsData.map((item) => (
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
      </div>
    </main>
  )
}

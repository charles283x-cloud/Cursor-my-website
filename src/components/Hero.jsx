export default function Hero() {
  return (
    <section className="relative w-full aspect-[3/1] min-h-[200px] sm:min-h-[280px] overflow-hidden bg-slate-900">
      <img
        src="https://images.unsplash.com/photo-1626266061368-46a8e0a2981d?w=1400&q=85"
        alt="大型集装箱式电池储能电站在夕阳下"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-snug mb-3 drop-shadow">
            日本关东 50MW/100MWh 独立储能电站项目正式启动，助力区域能源转型
          </h2>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-medium text-sm rounded transition-colors"
          >
            查看详情
          </a>
        </div>
      </div>
    </section>
  )
}

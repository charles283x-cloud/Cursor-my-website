export default function Hero() {
  return (
    <section className="relative w-full aspect-[3/1] min-h-[200px] sm:min-h-[280px] overflow-hidden bg-slate-900">
      <img
        src="/hero-bg.png"
        alt="大型户外电池储能集装箱项目"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
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

import { getDb, saveDb } from './db.js'

const db = await getDb()

db.run('DELETE FROM projects')
db.run('DELETE FROM news')

const projects = [
  ['日本关东地区 50MW/100MWh 独立储能电站', '茨城县', 50, 100, '在建', '关东地区首个大型独立储能项目，采用集装箱式锂离子电池系统，具备削峰填谷、调频等多重应用场景。预计 2026 年 Q4 投运。', '/hero-bg.png', 'project-kanto@example.com'],
  ['九州 30MW/60MWh 储能调峰项目', '福冈县', 30, 60, '规划', '九州电力辖区内储能调峰示范项目，配套光伏电站，实现源网荷储一体化。', 'https://images.unsplash.com/photo-1626266061368-46a8e0a2981d?w=600&q=80', 'project-kyushu@example.com'],
  ['北海道 20MW/40MWh 风电配套储能', '北海道', 20, 40, '运营', '与风电基地配套建设的储能系统，有效平滑风电出力波动，提高并网消纳能力。', 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80', 'project-hokkaido@example.com'],
]

const news = [
  ['关东储能项目一期基础施工完成，预计 Q2 进入设备安装阶段', '日本关东地区 50MW/100MWh 独立储能电站项目进展顺利，基础施工已全部完成。', '项目于 2025 年初完成土建基础工程，目前正在进行设备采购与进场准备。预计第二季度将进入电池集装箱及 PCS 安装阶段，整体进度符合预期。', 'https://images.unsplash.com/photo-1504307651254-35680f356041?w=600&q=80', '2025-02-05'],
  ['日本储能技术研讨会成功举办，多方专家共议电网调峰方案', '日本储能协会主办的储能技术研讨会于东京举行，来自政府、电网企业与设备厂商的专家参会。', '会议围绕储能参与电力市场、调频辅助服务、安全标准等议题展开讨论。专家指出，随着可再生能源占比提升，储能将在日本电网中发挥越来越重要的作用。', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', '2025-01-28'],
  ['项目与东京电力达成调频服务框架协议，商业化路径进一步明确', '关东储能项目运营方与东京电力签署调频服务框架协议，明确了项目投运后的收益模式。', '根据协议，项目将参与一次、二次调频市场，预计年收益可观。此举标志着日本储能项目商业化运营模式日趋成熟。', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80', '2025-01-15'],
]

for (const p of projects) {
  db.run('INSERT INTO projects (title, region, capacity_mw, capacity_mwh, status, description, image, contact_email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', p)
}
for (const n of news) {
  db.run('INSERT INTO news (title, summary, content, image, published_at) VALUES (?, ?, ?, ?, ?)', n)
}

saveDb()
console.log('Seed completed: inserted', projects.length, 'projects and', news.length, 'news items.')

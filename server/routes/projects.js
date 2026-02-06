import { Router } from 'express'
import { getDb } from '../db.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const db = await getDb()
    const { region, capacity_min, capacity_max, status, q } = req.query

    let sql = 'SELECT * FROM projects WHERE 1=1'
    const params = []

    if (region) {
      sql += ' AND region = ?'
      params.push(region)
    }
    if (capacity_min) {
      sql += ' AND capacity_mwh >= ?'
      params.push(parseFloat(capacity_min))
    }
    if (capacity_max) {
      sql += ' AND capacity_mwh <= ?'
      params.push(parseFloat(capacity_max))
    }
    if (status) {
      sql += ' AND status = ?'
      params.push(status)
    }
    if (q) {
      sql += ' AND (title LIKE ? OR description LIKE ?)'
      const pattern = `%${q}%`
      params.push(pattern, pattern)
    }

    sql += ' ORDER BY created_at DESC'
    const stmt = db.prepare(sql)
    if (params.length) stmt.bind(params)
    const rows = []
    while (stmt.step()) rows.push(stmt.getAsObject())
    stmt.free()
    res.json(rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const db = await getDb()
    const stmt = db.prepare('SELECT * FROM projects WHERE id = ?')
    stmt.bind([req.params.id])
    const row = stmt.step() ? stmt.getAsObject() : null
    stmt.free()
    if (!row) return res.status(404).json({ error: '项目不存在' })
    res.json(row)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router

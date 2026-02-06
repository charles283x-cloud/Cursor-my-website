import { Router } from 'express'
import { getDb } from '../db.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const db = await getDb()
    const stmt = db.prepare('SELECT * FROM news ORDER BY published_at DESC, created_at DESC')
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
    const stmt = db.prepare('SELECT * FROM news WHERE id = ?')
    stmt.bind([req.params.id])
    const row = stmt.step() ? stmt.getAsObject() : null
    stmt.free()
    if (!row) return res.status(404).json({ error: '新闻不存在' })
    res.json(row)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router

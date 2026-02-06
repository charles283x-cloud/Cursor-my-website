import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { getDb, saveDb } from '../db.js'

const router = Router()

const validate = [
  body('company').trim().notEmpty().withMessage('公司名称不能为空'),
  body('contact_name').trim().notEmpty().withMessage('联系人不能为空'),
  body('email').trim().isEmail().withMessage('请输入有效邮箱'),
  body('phone').optional().trim(),
  body('message').optional().trim(),
]

router.post('/', validate, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const arr = errors.array().map((e) => {
      const path = typeof e.path === 'string' ? e.path.split('.').pop() : (e.path?.[e.path.length - 1] || e.param)
      return { path, msg: e.msg }
    })
    return res.status(400).json({ errors: arr })
  }
  try {
    const db = await getDb()
    const { company, contact_name, email, phone, message } = req.body
    db.run(
      `INSERT INTO partner_applications (company, contact_name, email, phone, message) VALUES (?, ?, ?, ?, ?)`,
      [company, contact_name, email, phone || null, message || null]
    )
    const res = db.exec('SELECT last_insert_rowid() as id')
    const id = res[0]?.values[0]?.[0]
    saveDb()
    res.status(201).json({ id, message: '提交成功' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router

import { Router, Request, Response } from 'express'

const router = Router()

// Handshake endpoint with Discord Bot
router.get('/ping', (req: Request, res: Response) => {
  console.log(req.ip)
  res.json({ message: 'pong' })
})

export default router

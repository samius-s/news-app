import Router from 'express'
import NewsListController from '../controllers/NewsListController.js'

const router = new Router()

router.get('/news')
router.get('/news/{id}')
router.post('/news', NewsListController.create)
router.put('/news/{id}')
router.delete('/news/{id}')

export default router

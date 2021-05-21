import Router from 'express'
import NewsListController from '../controllers/NewsListController.js'

const router = new Router()

router.get('/news', NewsListController.getAll)
router.get('/news/:id', NewsListController.getOne)
router.post('/news', NewsListController.create)
router.put('/news/:id', NewsListController.update)
router.delete('/news/:id', NewsListController.delete)

export default router

import NewsList from '../models/NewsList.js'

class NewsListController {
    async create(req, res) {
        try {
            const { title, shortDescription, image } = req.body
            const newsList = await NewsList.create({ title, shortDescription, image })
            res.json(newsList)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new NewsListController()
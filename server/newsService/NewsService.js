import NewsList from '../models/NewsList.js'

class NewsService {
    async getAll() {
        const newsList = await NewsList.find()
        return newsList
    }

    async getOne(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        const newsItem = await NewsList.findById(id)
        return newsItem
    }

    async create(newsItem) {
        const createNewsItem = await NewsList.create(newsItem)
        return createNewsItem
    }

    async update(newsItem, id) {
        if (!newsItem._id & !id) {
            throw new Error('ID не указан')
        }
        const updatedNewsItem = await NewsList.findByIdAndUpdate(newsItem._id, newsItem, { new: true })
        return updatedNewsItem
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        const newsList = await NewsList.findByIdAndDelete(id)
        return newsList
    }
}

export default new NewsService()
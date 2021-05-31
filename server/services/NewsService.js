import NewsItem from '../models/NewsItem.js'
import FileService from './FileService.js'

class NewsService {
    async getAll() {
        const newsList = await NewsItem.find()
        const finalNewsList = newsList.map(e => {
            return {
                title: e.title,
                shortDescription: e.shortDescription,
                image: e.imageId
            }
        })
        return finalNewsList
    }

    async getOne(id) {

        const newsItem = await NewsItem.find({ imageId: id })
        if (!id) {
            throw new Error('неверный ID')
        }
        const finalNewsItem = {
            title: newsItem[0].title,
            shortDescription: newsItem[0].shortDescription,
            fullDescription: newsItem[0].fullDescription,
            image: newsItem[0].imageId
        }
        return finalNewsItem
    }

    async create(newsItem, image) {
        const newsItemMaxId = await NewsItem.find().sort({ imageId: -1 }).limit(1)
        const idx = newsItemMaxId[0].imageId + 1

        const fileName = FileService.saveFile(image, idx)

        const correctedNewsItem = {
            title: newsItem.title,
            shortDescription: newsItem.shortDescription,
            fullDescription: newsItem.fullDescription,
            image: fileName,
            imageId: idx
        } // для соответствия API ТЗ используетcz imageId для каждой новости, он равен максимальному Id у существующих новостей в базе данных + 1 

        const createNewsItem = await NewsItem.create({ ...correctedNewsItem, image: fileName })
        return createNewsItem
    }

    async update(newsItem, id) {
        if (!newsItem._id && !id) {
            throw new Error('ID не указан')
        }
        const updatedNewsItem = await NewsItem.findOneAndUpdate({ imageId: id }, newsItem, { new: true })
        return updatedNewsItem
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID не указан')
        }
        const newsItem = await NewsItem.findOneAndDelete({ imageId: id })
        return newsItem
    }
}

export default new NewsService()
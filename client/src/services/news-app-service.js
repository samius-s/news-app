// класс-клиент для localhoct:5000/news

export default class NewsAppService {
    _apiBase = 'http://localhost:5000/api'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    getNewsList = async () => {
        const res = await this.getResource(`/news/`)
        return res
    }

    getNewsItem = async (id) => {
        const newsItem = await this.getResource(`/news/${id}/`);
        return newsItem
    }

    deleteNewsItem = (id) => {
        fetch(`${this._apiBase}/news/${id}`, { method: 'DELETE' })
    }
}


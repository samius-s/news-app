import React from 'react'

const {
    Provider: NewsAppServiceProvider,
    Consumer: NewsAppServiceConsumer
} = React.createContext()

export {
    NewsAppServiceProvider,
    NewsAppServiceConsumer
}
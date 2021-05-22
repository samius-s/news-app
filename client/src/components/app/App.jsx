import React from 'react'
import './app.css'

import Header from '../header/Header'
import NewsList from '../news-list/news-list'
import withNewsAppService from '../hoc/with-news-app-service'

const App = ({ newsAppService }) => {
  return (
    <div>
      <Header />
      <NewsList />
    </div>
  )
}

export default withNewsAppService()(App)
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app/app'
import ErrorBoundry from './components/error-boundry/error-boundry'
import NewsAppService from './services/news-app-service'
import { NewsAppServiceProvider } from './components/news-app-service-context/news-app-service-context'

import store from './store'

const newsAppService = new NewsAppService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <NewsAppServiceProvider value={newsAppService}>
        <Router>
          <App />
        </Router>
      </NewsAppServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)
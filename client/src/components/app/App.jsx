import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './app.css'
import Header from '../header/header'
import HomePage from '../pages/home-page'
import NewsItemPage from '../pages/newsItem-page'

const App = () => {
  return (
    <main role='main' className='app container'>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/news' component={NewsItemPage} />
      </Switch>
    </main>
  )
}

export default App
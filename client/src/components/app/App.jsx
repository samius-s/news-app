import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './app.css'
import Header from '../header/header'
import HomePage from '../pages/home-page'
import NewsItemPage from '../pages/news-item-page'

const App = () => {
  return (
    <main role='main' className='app container'>
      <Header />
      <Switch>
        {/* <Route path='/' component={HomePage} exact /> */}
        <Route path='/' exact render={({ history }) => {
          console.log('history', history)
          return <HomePage history={history} />
        }} />
        <Route path='/news/:id'
          render={({ match }) => {

            const { id } = match.params
            return <NewsItemPage newsItemId={id} />
          }}
        />
      </Switch>
    </main>
  )
}

export default App
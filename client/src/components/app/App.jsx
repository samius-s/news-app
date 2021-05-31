import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './app.css'
import Header from '../header/header'
import HomePage from '../pages/home-page'
import NewsItemPage from '../pages/news-item-page'
import EditPage from '../pages/edit-page'
import { useSelector } from 'react-redux'

const App = () => {
  const isAdmin = useSelector(state => state.isAdmin)

  return (
    <main role='main' className='app container'>
      <Header />
      <Switch>
        <Route path='/' exact render={({ history }) => {
          return <HomePage history={history} />
        }} />
        <Route path='/news/:id'
          render={({ match }) => {
            const { id } = match.params
            return <NewsItemPage newsItemId={id} />
          }} />
        <Route path='/edit' render={() => (<EditPage isAdmin={isAdmin} />)} />
        <Redirect to='/' />
      </Switch>
    </main>
  )
}

export default App
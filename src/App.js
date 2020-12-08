import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Components
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Post from './components/Post'
import SinglePost from './components/SinglePost'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path='/' exact></Route>
        <Route component={About} path='/about'></Route>
        <Route component={SinglePost} path='/post/:slug'></Route>
        <Route component={Post} path='/post'></Route>
        <Route component={Project} path='/project'></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

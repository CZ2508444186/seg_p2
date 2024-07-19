import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Signup from './views/signup'
import Income from './views/income'
import Novel3page from './views/novel3page'
import Signin from './views/signin'
import Bookshelf from './views/bookshelf'
import Forum from './views/forum'
import CNnovelpage from './views/c-nnovelpage'
import Write from './views/write'
import Browsepage from './views/browsepage'
import Novel2page from './views/novel2page'
import Novel4page from './views/novel4page'
import Writenovel from './views/writenovel'
import Readnovelpage from './views/readnovelpage'
import Novelpage from './views/novelpage'
import PrivacyPolicy from './views/privacy-policy'
import Home from './views/home'
import Writingguide from './views/writingguide'
import FAQ from './views/faq'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Signup} exact path="/signup" />
        <Route component={Income} exact path="/income" />
        <Route component={Novel3page} exact path="/novel3page" />
        <Route component={Signin} exact path="/signin" />
        <Route component={Bookshelf} exact path="/bookshelf" />
        <Route component={Forum} exact path="/forum" />
        <Route component={CNnovelpage} exact path="/c-nnovelpage" />
        <Route component={Write} exact path="/write" />
        <Route component={Browsepage} exact path="/browsepage" />
        <Route component={Novel2page} exact path="/novel2page" />
        <Route component={Novel4page} exact path="/novel4page" />
        <Route component={Writenovel} exact path="/writenovel" />
        <Route component={Readnovelpage} exact path="/readnovelpage" />
        <Route component={Novelpage} exact path="/novelpage" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={Home} exact path="/" />
        <Route component={Writingguide} exact path="/writingguide" />
        <Route component={FAQ} exact path="/faq" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

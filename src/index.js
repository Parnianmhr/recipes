import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App'
import RecipesContainer from './recipes/RecipesContainer'
import RecipePage from './recipes/RecipePage'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={RecipesContainer} />
        <Route path="/recipes/:recipeId" component={RecipePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

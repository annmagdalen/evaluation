import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import BatchesContainer from './batches/BatchesContainer'
import BatchesPage from './batches/BatchesPage'
import StudentsPage from './students/StudentsPage'
import SignIn from './users/SignIn'
import './index.css';

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BatchesContainer} />
        <Route path="/batch/:batchId" component={BatchesPage} />
        <Route path="/student/:studentId" component={StudentsPage} />
        <Route path="/sign-in" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

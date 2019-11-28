import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import App from '../App'
import Male from '../Views/Male'
import Female from '../Views/Female'
import Publish from '../Views/Publish'
import Classification from '../Views/Classification'
import Free from '../Views/Free'
import Ranking from '../Views/Ranking'
import Login from '../Views/Login'
import More from '../Views/More'

import { Provider } from 'react-redux'
import store from '../Redux/store'
const router = (

    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/male" component={Male} />
                    <Route path="/female" component={Female} />
                    <Route path="/publish" component={Publish} />
                    <Route path="/classification" component={Classification} />
                    <Route path="/free" component={Free} />
                    <Route path="/ranking" component={Ranking} />
                    <Route path="/login" component={Login} />
                    <Route path="/more" component={More}/>
                    <Redirect from="/" to="/male" />
                </Switch>
            </App>
        </Router>
    </Provider>

)
export default router
import React from 'react'
import App from './App'
import Login from './Parapachin/Login'
import SignIn from './Parapachin/SignIn'
import Animal from './Parapachin/Animal'

import {
    Route
} from 'react-router-dom';


class Routes extends React.Component {
    render() {
        return (
            <App>
                <Route exact path ='App' component={App} />
                <Route path ='Login' component={Login} />
                <Route path='SignIn' component={SignIn} />
                <Route path='Animal' component={Animal} />
               
            </App>
        )
    }
}


export default Routes;
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index.js'
import App from "./App.js"
import Login from './Parapachin/Login'
import SignIn from './Parapachin/SignIn'
import Animal from './Parapachin/Animal'
import Vaccine from '/home/lucila/Project/animaladas/src/Parapachin/vaccine'
import Home from '/home/lucila/Project/animaladas/src/Parapachin/home'
import PruebaCarrusel from '/home/lucila/Project/animaladas/src/Parapachin/pruebaCarrusel'
import Footer from '/home/lucila/Project/animaladas/src/Parapachin/footer.js'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';





console.log("index.js")

ReactDOM.render(<Router>
    <div>
        <Route exact path="/App" component={App} />
        <Route path='/Login' component={Login} />
        <Route path='/SignIn' component={SignIn} />
        <Route path='/Animal' component={Animal} />
        <Route path='/Vaccine' component={Vaccine} />
        <Route path='/Home' component={Home} />
        <Route path='/PruebaCarrusel' component={PruebaCarrusel}/>
        <Route path='/Footer' component={Footer}/>
    </div>

</Router>, document.getElementById('root'));

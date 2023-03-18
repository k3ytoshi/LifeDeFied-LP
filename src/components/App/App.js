import React from 'react'

import Home from '../Home/Home'
import Mission from '../Mission/Mission'
import Unstoppable from '../Unstoppable/Unstoppable'
import Academy from '../Academy/Academy'
import Code from '../Code/Code'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Trainer from '../Trainer/Trainer'
import Product from '../Product/Product'
import Identity from '../Identity/Identity'

import events from '../../core/EventEmitter'

import './App.scss'

class App extends React.Component {
  componentDidMount() {
    events.on('navigate', number => {
      const element = document.getElementById(`page-${number}`)
      if (!!element) {
        element.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  }

  componentWillUnmount() {
    events.removeAllListeners('navigate')
  }

  render() {
    return (
      <div className="App">
        <div id="page-1">
          <Home />
        </div>
        <div id="page-2">
          <Mission /> About
        </div>
        <div id="page-3">
          <Academy /> Assets
        </div>
        <div id="page-4"> Staking
          <Code /> 
        </div>
        <div id="page-5"> Market
          <Trainer /> 
        </div>
        <div id="page-6"> Networks
          <Unstoppable /> 
        </div>
        <div id="page-7"> Identity
          <Identity />
        </div>
        <div id="page-8"> Product
          <Product />
        </div>     
        <div id="page-9"> Contact
          <Contact />
        </div>                
        <div id=""> 
          <Footer />
        </div>
      </div>
    )
  }
}

export default App

import React from 'react'
import '../../public/images/home/paths-grey.svg'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'

import './Mission.scss'
import '../../public/images/home/paths-grey.svg'


function Trainer() {
    return (
      <Container className="Unstoppable" fluid>
        <div className="Screen-right-half paths-grey" />
  
        <Edge className="Edge-header">
          <Container>
            <div className="Edge-content">
              <div className="Edge-content-start">
              </div>
            </div>
          </Container>
        </Edge>

        <Container className="Container-flex" clipped={false}>
        <Banner
          text="Decentralized Marketplace"
          info={
            <>
             User, businesses and public networks have the option to list their tokenized assets and personal networks on a decentralized marketplace for all to access to utilize. 
            </>
          }
          cover="trainer"
          textDark />
      </Container>

        <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">05 / 09</div>
              <div className="Edge-pagination-icon sm-svg-green" onClick={() => events.navigate(6)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#31AD94" />
              </div>
            </div>
          </div>
         <hr className="Divider" />
        </Container>
      </Edge>
    </Container>
  )
}

export default Trainer
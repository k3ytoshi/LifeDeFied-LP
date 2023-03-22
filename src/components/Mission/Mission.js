import React from 'react'
import '../../public/images/home/paths-grey.svg'
import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'
import Banner from '../Banner/Banner'

import './Mission.scss'
import '../../public/images/home/paths-grey.svg'

function Mission() {
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
          text="About us"
          info={
            <>
              LifeDeFied is the first Decentralized Security as a Service (DSaaS) platform offering a personal blockchain security platform that provides users with a variety of features to help manage their digital assets and identity securely.
          
            </>
          }
          cover="about"
          textDark />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">02 / 09</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(3)}>
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

export default Mission

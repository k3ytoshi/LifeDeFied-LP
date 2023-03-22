import React from 'react'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'

import './Mission.scss'
import '../../public/images/home/paths-grey.svg'

function Unstoppable() {
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
          text="Personal Blockchains"
          info={
            <>
              Explore the flexibility of LifeDeFied's blockchain technology, offering both public and private blockchain networks for individuals, businesses, and governments.
            </>
          }
          cover="network"
          textDark />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">06 / 09</div>
              <div className="Edge-pagination-icon sm-svg-green" onClick={() => events.navigate(7)}>
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

export default Unstoppable

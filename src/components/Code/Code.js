import React from 'react'
import '../../public/images/home/paths-grey.svg'
import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'
import './Mission.scss'
import '../../public/images/home/paths-grey.svg'

function Code() {
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
          text="Staked Security"
          info={
            <>
            User have the option to stake their tokenized assets back into the platform's state-of-the-art staking security solutions, allowing users to earn passive income and protect their investments on public and private blockchain networks.

            </>
          }
          cover="staking"
          textDark />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">04 / 09</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(5)}>
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

export default Code

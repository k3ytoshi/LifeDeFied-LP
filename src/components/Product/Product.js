import React from 'react'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'
import './Mission.scss'
import '../../public/images/home/paths-grey.svg'

function Product() {
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
          text="Product development"
          info={
            <>
            The LifeDeFied platform will be launching the open beta and testnet in Q3 2023.
            Sign up through the whitelisting form below to receive updates and early access
            </>
          }
          cover="product"
          textDark />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">08 / 09</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(9)}>
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

export default Product
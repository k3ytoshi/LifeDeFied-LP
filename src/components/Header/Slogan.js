import React from 'react'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Slogan.scss'

function Slogan() {
  return (
    <Container>
      <div className="Slogan">
        <div className="Slogan-title">
          <div className="Slogan-content">
            <span>Welcome to LifeDeFied Blockchain Security</span>
          </div>
        </div>
        <div className="Page-down" onClick={() => events.navigate(2)}>
          <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#31AD94" />
        </div>
      </div>
    </Container>
  );
}

export default Slogan

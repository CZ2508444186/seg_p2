import React from 'react'

import Homesearch from './homesearch'
import Homecomponent1 from './homecomponent1'
import Homecomponent2 from './homecomponent2'
import './hometotal.css'

const Hometotal = (props) => {
  return (
    <div className="hometotal-container">
      <div className="hometotal-container1">
        <Homesearch></Homesearch>
        <div className="hometotal-container2">
          <div className="hometotal-container3">
            <Homecomponent1></Homecomponent1>
          </div>
        </div>
        <div className="hometotal-container4">
          <div className="hometotal-container5">
            <Homecomponent2></Homecomponent2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hometotal

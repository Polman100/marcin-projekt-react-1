import React from 'react'
import services from '../data/service'
import ServiceBox from './ServiceBox'

const Offer = () => {
  return (
    <section className="offer padding" id="offer">
      <div className="wrapper center">
          <h1 className="h1-padding-white">Czym zajmuje się nasza firma?</h1>
          <div className="grid">
            {services.map((service => (
                <ServiceBox 
                key={service.id}
                data={service}
                />   
            )))}
          </div>
      </div>
    </section>
  )
}

export default Offer
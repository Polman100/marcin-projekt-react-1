import React from 'react'
import workers from '../data/workers'
import Worker from './Worker'

const Professionals = () => {
  return (
    <section className="proffesionals1 padding" id="about-us">
      <div className="wrapper">
          <h1 className="h1-padding">Nasi specjaliści</h1>
          {workers.map((worker => (
            <Worker
            key={worker.id}
            data={worker}
            />
          )))}
      </div>  
    </section>
  )
}

export default Professionals
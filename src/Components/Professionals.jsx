import React from 'react'

const Professionals = () => {
  return (
    <section className="proffesionals1 padding" id="about-us">
      <div className="wrapper">
          <h1 className="h1-padding">Nasi specjaliści</h1>
          <div className="workers1">
              <div className="person1 circle1"></div>
              <div className="person1 name1">
                  <p className="surname">Ben Parker [ dział ]</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eaque porro pariatur quam impedit explicabo aspernatur, blanditiis assumenda fuga autem et, eum unde nobis. Quaerat accusamus iure quod delectus molestias.</p>
              </div>
          </div> 
          <div className="workers1">
              <div className="person1 circle2"></div>
              <div className="person1 name1 right">
                  <p className="surname right">Michael Dam [ dział ]</p>
                  <p className="right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eaque porro pariatur quam impedit explicabo aspernatur, blanditiis assumenda fuga autem et, eum unde nobis. Quaerat accusamus iure quod delectus molestias.</p>
              </div>
          </div>
      </div>  
    </section>
  )
}

export default Professionals
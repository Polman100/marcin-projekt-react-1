import React from 'react'

const Offer = () => {
  return (
    <section className="offer padding" id="offer">
      <div className="wrapper center">
          <h1 className="h1-padding-white">Czym zajmuje się nasza firma?</h1>
          <div className="grid">
              <div className="service dot">
                  <p className="p-service">Usługa 1</p>
                  <p className="p-small">(nowość)</p>
              </div>
              <div className="service">
                  <p className="p-service">Usługa 2</p>
              </div>
              <div className="service">
                  <p className="p-service">Usługa 3</p>
              </div>
              <div className="service">
                  <p className="p-service">Usługa 4</p>
              </div>
              <div className="service">
                  <p className="p-service">Usługa 5</p>
              </div>
              <div className="service">
                  <p className="p-service">Usługa 6</p>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Offer
import React from 'react'

const LandingPage = () => {
  return (
    <div className="background">
      <div className="filter padding">
          <div className="wrapper">
              <h1 className="heading">
                  Nasza firma oferuje najwyższej jakości produkty
              </h1>
              <h2 className="space2 heading">
                  Nie wierz nam na słowo - sprawdź
              </h2>
              <a href="#offer">
                  <button className="button">
                      oferta
                  </button>
              </a>         
          </div>
      </div>
    </div>
  )
}

export default LandingPage
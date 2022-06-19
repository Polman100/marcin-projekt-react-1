import React from 'react'

const ServiceBox = ({
  data: {id, name, isNew },
}) => {
  
  return (
    <div className={ isNew ? "service dot" : "service" }
      id={id}>
      <p className="p-service">{name}</p>
      {isNew && <p className="p-small">(nowość)</p>}
    </div>
  )
}

export default ServiceBox
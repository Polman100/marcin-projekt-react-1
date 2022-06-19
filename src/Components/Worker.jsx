import React from 'react'

const Worker = ({
    data: {id, name, department, text, photo, align },
  }) => {
  return (
    <div className="workers1" id={id}>
        <div className={`person1 ${photo}`}>
        </div>
        <div className={`person1 name1 ${align}`}>
            <p className={`surname ${align}`}>{name + " " + department}</p>
            <p className={align}>{text}</p>
        </div>
    </div> 
  )
}

export default Worker
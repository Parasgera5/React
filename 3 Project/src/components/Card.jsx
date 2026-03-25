import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
        <div className="top">
          <img src={props.logo} alt="logo"/>
          <div className="save">
            <Bookmark color="black"/> <span>save</span>
          </div>
        </div>
        <div className="center">
          <h2>{props.companyName}</h2>
          <p>{props.description}</p>
        </div>
        <div className="bottom">
          <div className="posted">{props.postedTime}</div>
            <div className="pay">{props.payScale}</div>
            <button className='apply'>Apply</button>
        </div>
      </div>
  )
}

export default Card
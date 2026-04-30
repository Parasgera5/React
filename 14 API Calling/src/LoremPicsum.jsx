import axios from 'axios'
import React, { useState } from 'react'

const LoremPicsum = () => {
    const [data, setData] = React.useState([])

    const getData = async () => {
    let response = await axios.get(`https://picsum.photos/v2/list`)
    console.log(response)
    setData(response.data)
    }

  return (
    <div>
        <button onClick={getData}>Lorem Picsum.</button>
        {data.map((elem, idx) => {
            return (
                <div key={idx}>
                    <h3>{elem.author}</h3>
                    <img src={elem.download_url} alt={elem.author} width="200px" />
                </div>
            )
        })}    
    </div>
  )
}

export default LoremPicsum
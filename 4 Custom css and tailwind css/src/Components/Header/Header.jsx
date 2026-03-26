import React from 'react'
import Styles from "./header.module.css"

const Header = () => {
  return (
    <>
    <h2 className={Styles.header} >I am Header</h2>
    <p className={Styles.desc} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga iusto aspernatur doloremque necessitatibus cumque impedit error qui reiciendis eligendi?</p>
    <button className={Styles.btn}>I am the button from header having btn class.</button>
    </>
  )
}

export default Header
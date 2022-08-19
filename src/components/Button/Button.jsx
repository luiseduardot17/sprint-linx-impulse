import React from 'react'
import S from './Button.module.css'

const Button = ({texto, onClick}) => {
  return (
    <div className={S.container}>
      <button onClick={onClick} className={S.button}>{texto}</button>
    </div>
  )
}

export default Button

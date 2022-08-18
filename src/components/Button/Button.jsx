import React from 'react'
import S from './Button.module.css'

const Button = ({texto}) => {
  return (
    <div className={S.container}>
      <button className={S.button}>{texto}</button>
    </div>
  )
}

export default Button

import React from 'react'
import Styles from '../../../public/css/mainScreen.module.css'
import { Link } from 'react-router-dom'
export const SubscribeButton = ({link,title}) => {
  return (
    <Link to={link} className={`${Styles.start} btn btn-danger ms-2 `}>{title}</Link>
  )
}

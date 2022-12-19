import { SetStateAction, useState } from 'react'
import reactLogo from './assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Info() {
  const school_name = sessionStorage.getItem("schoolName")

  return (
    <div className="info flex items-center justify-center">
      <div className="info text-neutral-100 text-2xl">{ school_name }</div>
    </div>
  )
}

export default Info
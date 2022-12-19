import { SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Info() {
  const school_name = sessionStorage.getItem("schoolName")
  let res = []
  
  let schoolName = ''
  let engName = ''

  useEffect(() => {
    const GetSchoolInfo = async () => {
      await axios.get(`https://open.neis.go.kr/hub/schoolInfo?SCHUL_NM=${ school_name }&Type=json&pIndex=1&pSize=100&KEY=d374573af8d34cddaf4e4c250b995c8c`)
        .then(resp => res = resp.data.schoolInfo[1].row)

      // schoolName = res.SCHUL_NM
      // engName = res.ENG_SCHUL_NM
    }
    GetSchoolInfo()

    console.log(res)
    
  }, [])

  return (
    <div className="info flex items-center justify-center">
      <div className="text-neutral-100 text-2xl">{ schoolName }</div>
      <div className="text-neutral-200 text-1xl">{ engName }</div>
    </div>
  )
}

export default Info
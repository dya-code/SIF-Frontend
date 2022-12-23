import { SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'


function Info() {
  const school_name = sessionStorage.getItem("schoolName")
  const [res, setRes] = useState<any>([])
  // const [infoArr, setInfoArr] = useState<{name: string; engname: number}[]>([]);

  useEffect(() => {
    const GetSchoolInfo = async () => {
      await axios.get(`https://open.neis.go.kr/hub/schoolInfo?SCHUL_NM=${ school_name }&Type=json&pIndex=1&pSize=100&KEY=d374573af8d34cddaf4e4c250b995c8c`)
        .then(resp => { setRes(resp.data.schoolInfo[1].row[0]); console.log(res) })
    }

    GetSchoolInfo()
  }, [])

  return (
    <div className="info flex items-center justify-center flex-col">
      <div className="text-neutral-100 text-2xl">{ res.SCHUL_NM }</div>
      <div className="text-neutral-200 text-1xl">{ res.ENG_SCHUL_NM }</div>
    </div>
  )
}

export default Info
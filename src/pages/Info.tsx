import { SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'
// import { format } from 'date-fns'
import reactLogo from './assets/react.svg'


function Info() {
  const school_name = sessionStorage.getItem("schoolName")
  const [res, setRes] = useState<any>([])

  useEffect(() => {
    const GetSchoolInfo = async () => {
      await axios.get(`https://open.neis.go.kr/hub/schoolInfo?SCHUL_NM=${ school_name }&Type=json&pIndex=1&pSize=100&KEY=d374573af8d34cddaf4e4c250b995c8c`)
        .then(resp => { setRes(resp.data.schoolInfo[1].row[0]); console.log(resp.data.schoolInfo[1].row[0]) })
    }

    GetSchoolInfo()
  }, [])

  return (
    <div className="info flex items-center justify-center flex-col">
      <div className="name-section mb-[50px]">
        <div className="text-neutral-100 text-2xl">{ res.SCHUL_NM }</div>
        <div className="text-neutral-200 text-1xl">{ res.ENG_SCHUL_NM }</div>
      </div>

      <div className="info-section flex justify-center items-center">
        <div className="info-section-l text-xl flex flex-col mr-24 ml-24">
          <div className="section-card flex items-center justify-start mb-4">
            <div className="des font-semibold mr-2">학교유형</div>
            <div className="var">{ res.HS_SC_NM }</div>
          </div>
          <div className="section-card flex items-center justify-start mb-4">
            <div className="des font-semibold mr-2">설립구분</div>
            <div className="var">{ res.FOND_SC_NM }</div>
          </div>

          <div className="section-card flex items-center justify-start mb-4">
            <div className="des font-semibold mr-2">설립일자</div>
            <div className="var">{ res.FOND_YMD }</div>
          </div>

          <div className="section-card flex items-center justify-start mb-4">
            <div className="des font-semibold mr-2">연락처</div>
            <div className="var">{ res.ORG_TELNO }</div>
          </div>
        </div>

        <div className="info-section-r text-xl flex flex-col">
          <div className="section-card flex items-center justify-start mb-4">
            <div className="des font-semibold mr-2">학교주소</div>
            <div className="var">{ res.ORG_RDNMA }</div>
          </div>
          <div className="section-card flex items-center justify-start mb-4">
            <div className="des font-semibold mr-2">설립구분</div>
            <div className="var">{ res.FOND_SC_NM }</div>
          </div>

          <div className="section-card flex items-center justify-start mb-4">
            <div className="des font-semibold mr-2">설립일자</div>
            <div className="var">{ res.FOND_YMD }</div>
          </div>

          <div className="section-card flex items-center justify-start mb-4">
            <div className="des font-semibold mr-2">연락처</div>
            <div className="var">{ res.ORG_TELNO }</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Info
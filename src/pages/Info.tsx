import { SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
      <Link to={ "/" } className="h-14 p-4 fixed lg:left-[15%] lg:top-[15%] max-[600px]:left-[2%] max-[600px]:top-[2%] rounded-r-2xl text-neutral-400 transition duration-200"><FontAwesomeIcon icon={ faArrowLeft } className="font-bold text-2xl text-neutral-200 transition duration-200 hover:scale-110" /></Link>
      <div className="name-section mb-[50px]">
        <div className="text-neutral-100 text-2xl">{ res.SCHUL_NM }</div>
        <div className="text-neutral-200 text-1xl">{ res.ENG_SCHUL_NM }</div>
      </div>

      <div className="info-section flex justify-center items-center">
        <div className="flex lg:justify-center sm:justify-start max-[600px]:flex-col max-[900px]:flex-col lg:flex-row">
          <div className="info-section-l text-xl flex flex-col lg:mr-24 lg:ml-24">
            <div className="section-card flex items-center justify-start mb-4">
              <div className="des font-semibold mr-2">학교유형</div>
              <div className="var">{ res.HS_SC_NM !== null ? res.HS_SC_NM : "-" }</div>
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
              <div className="var max-[600px]:w-[200px]">{ res.ORG_RDNMA }</div>
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

    </div>
  )
}

export default Info
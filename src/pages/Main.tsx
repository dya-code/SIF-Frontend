import { SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Main() {
  const [search, setSearch] = useState('')

  const onClickForSearching = async () => {
    console.log(search)
    sessionStorage.setItem("schoolName", search)
  }

  const onChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value)
  }

  return (
    <div className="main flex items-center justify-center flex-col">
      <div className="title text-white text-2xl transition duration-300 hover:scale-110 mb-4">학교 정보를 쉽게.</div>
      <div className='flex items-center justify-center'>
        <input type="text" onChange={ onChange } placeholder='학교 이름' className="search-bar w-86 h-14 p-4 pl-6 rounded-l-2xl bg-neutral-800 text-neutral-100 font-bold outline-none" />
        <Link to={ "/info" } onClick={ onClickForSearching } className="h-14 p-4 rounded-l-none rounded-r-2xl bg-neutral-800 text-neutral-400 transition duration-200"><FontAwesomeIcon icon={ faArrowRight } className="font-bold text-2xl text-neutral-200 transition duration-200 hover:scale-110" /></Link>
      </div>
    </div>
  )
}

export default Main
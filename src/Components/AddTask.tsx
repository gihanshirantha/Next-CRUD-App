"use client";

import {BsFillPersonPlusFill} from 'react-icons/bs'
import Modal from './Modal'
import { useState } from 'react'

const AddTask = () => {

const [modalOpen,setModalOpen]=useState<boolean>(false);

  return (
    <div>
      <button onClick={()=>setModalOpen(true)} className="items-center bg-blue-500 py-2 w-full rounded-md text-white hover:bg-blue-700 transition flex justify-center">Add new Employee <BsFillPersonPlusFill className="ml-3" size={15}/></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AddTask
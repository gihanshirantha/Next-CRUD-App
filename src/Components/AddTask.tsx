"use client";

import {BsFillPersonPlusFill} from 'react-icons/bs'
import Modal from './Modal'
import { FormEventHandler, useState } from 'react'
import { addEmployee } from '../../api';
import { useRouter } from 'next/navigation';

const AddTask = () => {
    const router =useRouter()

const [modalOpen,setModalOpen]=useState<boolean>(false);
const [newEmpValue,setNewEmpValue]=useState<string>('')
const [empname, setName] = useState<string>("");
const [emproll,setRoll]=useState<string>('');
const [empsalary,setSalary]=useState<string>('');


const handleSubmitNewEmployee:FormEventHandler<HTMLFormElement>=async(e)=>{
    e.preventDefault();
    await addEmployee({
        id:Math.floor(Math.random() * (1000 - 6 + 1) + 6),
        name:empname,
        job:emproll,
        salary:empsalary
    })
    setName("");
    setRoll("")
    setSalary("")
    setModalOpen(false);
    router.refresh();
}

  return (
    <div>
      <button onClick={()=>setModalOpen(true)} className="items-center bg-blue-500 py-2 w-full rounded-md text-white hover:bg-blue-700 transition flex justify-center">Add new Employee <BsFillPersonPlusFill className="ml-3" size={15}/></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            
            <form action="submit" onSubmit={handleSubmitNewEmployee}>
                <h2 className='font-bold text-lg text-center'>Add new Emplooyee</h2>
                <div className="modal-action flex-col items-center">
                <input  id='empname'  onChange={e=>setName(e.target.value)} type="text" placeholder="Enter Name" className="input input-bordered w-full " />  
                 <input id='emproll'  onChange={e=>setRoll(e.target.value)} type="text" placeholder="Enter Your Job Roll" className="input input-bordered w-full mt-5 " />
                <input id='empsalary'  onChange={e=>setSalary(e.target.value)} type="number" placeholder="Enter Salary" className="input input-bordered w-full mt-5 " /> 
                <button type='submit' className="btn btn-wide mt-5  bg-blue-500  text-white hover:bg-blue-700 transition">Submit</button>
                </div>
            </form>
        </Modal>
    </div>
  )
}

export default AddTask
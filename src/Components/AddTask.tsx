import {BsFillPersonPlusFill} from 'react-icons/bs'

const AddTask = () => {
  return (
    <div>
      <button className="items-center bg-blue-500 py-2 w-full rounded-md text-white hover:bg-blue-700 transition flex justify-center">Add new Employee <BsFillPersonPlusFill className="ml-3" size={15}/></button>
        
    </div>
  )
}

export default AddTask
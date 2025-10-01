import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addRooms, fetchRooms } from "../../features/rooms/hotelSlice"
import { useNavigate } from "react-router-dom"

const ManageRooms = () => {

    const [input, setInput] = useState({
        name: '', location: '', ratings: '', cost: ''
    })
    const dispatch = useDispatch()
      
   
    const navigate = useNavigate()
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addRooms({...input, status: "available"}))
        navigate('/rooms')
    }
    return (
        <div className="container mx-auto">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Room Name</label>
                    <input onChange={handleChange} type="text" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 ">Room Location</label>
                    <select id="location" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                        <option value="">Choose Location</option>
                        <option value="1st">1st Floor</option>
                        <option value="2nd">2nd Floor</option>
                        <option value="3rd">3rd Floor</option>
                        <option value="4th">4th Floor</option>
                        <option value="5th">5th Floor</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="ratings" className="block mb-2 text-sm font-medium text-gray-900 ">Ratings</label>
                    <select id="ratings" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                        <option value="">Choose Ratings</option>
                        <option value="1">1 star</option>
                        <option value="2">2 star</option>
                        <option value="3">3 star</option>
                        <option value="4">4 star</option>
                        <option value="5">5 star</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="cost" className="block mb-2 text-sm font-medium text-gray-900 ">Cost</label>
                    <input type="number" onChange={handleChange} id="cost" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add room</button>
            </form>
        </div>
    )
}

export default ManageRooms
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { addReserve } from "../../features/rooms/hotelSlice";

const Reservation = () => {
    const { list } = useSelector(store => store.rooms)
    console.log(list);

    const [input, setInput] = useState({
        name: '', roomId: '', checkIn: ''
    })
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addReserve(input))
        navigate('/rooms')
    }
    return (
        <div>
            <div className="container mx-auto">
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input onChange={handleChange} type="text" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="roomId" className="block mb-2 text-sm font-medium text-gray-900 ">Room name</label>
                        <select id="roomId" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                            <option value="">Choose Location</option>
                            {list.map((room) => {
                                return <option value={room.roomId}>{room.name}</option>
                            })}

                        </select>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="checkIn" className="block mb-2 text-sm font-medium text-gray-900 ">checkIn</label>
                        <input type="date" onChange={handleChange} id="cost" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add room</button>
                </form>
            </div>
        </div>
    )
}

export default Reservation

import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../../features/rooms/hotelSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoomList = () => {
    const { list } = useSelector(store => store.rooms)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRooms())
    }, [dispatch])
const navigate = useNavigate()

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between py-5">
                <h1 className="text-2xl font-semibold">All Rooms</h1>
                <button className="border px-7 py-2" onClick={()=>navigate('/manageRooms')}>Add Rooms</button>
            </div>
            <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Room name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ratings
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((room) => {
                                return <tr key={room.roomId} className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {room.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {room.location}
                                    </td>
                                    <td className="px-6 py-4">
                                        {room.ratings}
                                    </td>
                                    <td className="px-6 py-4">
                                        {room.cost}
                                    </td>
                                    <td className="px-6 py-4">
                                        {room.status}
                                    </td>
                                    <td className="px-6 py-4 flex gap-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">delete</a>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default RoomList
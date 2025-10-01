import { BrowserRouter, Route, Routes } from "react-router-dom"
import ManageRooms from "./pages/allRooms/ManageRooms"
import Headers from "./components/Headers"
import RoomList from "./pages/allRooms/RoomList"
import Reservation from "./pages/reservation/Reservation"
import Home from "./components/Home"
import AllReservation from "./pages/reservation/AllReservation"

const App = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/manageRooms" element={<ManageRooms />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/reserve" element={<Reservation />} />
        <Route path="/allreservation" element={<AllReservation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
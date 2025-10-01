import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const addRooms = createAsyncThunk("rooms/addRooms", async (rooms) => {
    const docRef = await addDoc(collection(db, "rooms"), rooms)
    return {
        roomId: docRef.id,
        ...rooms
    }
})
export const addReserve = createAsyncThunk("rooms/addReserve", async (reserve) => {
    const docRef = await addDoc(collection(db, "reserve"), reserve)
    return {
        reserveId: docRef.id,
        ...reserve
    }
})

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
    const { docs } = await getDocs(collection(db, "rooms"))
    const allRooms = docs.map((doc) => {
        return {
            roomId: doc.id,
            ...doc.data()
        }
    })
    return allRooms
})
export const fetchReservation = createAsyncThunk("rooms/fetchReservation", async () => {
    const { docs } = await getDocs(collection(db, "reserve"))
    const allReserve = docs.map((doc) => {
        return {
            reserveId: doc.id,
            ...doc.data()
        }
    })
    return allReserve
})

const hotelSlice = createSlice({
    name: 'rooms',
    initialState: {
        list: [],
        reservation: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addRooms.fulfilled, (state, action) => {
            state.list.push(action.payload)
        })
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            state.list = action.payload
        })
        builder.addCase(addReserve.fulfilled, (state, action) => {
            state.reservation.push(action.payload)
        })
        builder.addCase(fetchReservation.fulfilled, (state, action) => {
            state.reservation = action.payload
        })
    }
})

export default hotelSlice.reducer
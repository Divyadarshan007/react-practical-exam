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

const hotelSlice = createSlice({
    name: 'rooms',
    initialState: {
        list: []
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
    }
})

export default hotelSlice.reducer
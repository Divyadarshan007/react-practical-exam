import { configureStore } from '@reduxjs/toolkit';
import roomReducer from '../features/rooms/hotelSlice';

export const store = configureStore({
    reducer: {
        rooms: roomReducer
    }
})

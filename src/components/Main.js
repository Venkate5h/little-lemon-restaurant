import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import '../css/Main.css';

const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIME":
            return state;
        default:
            return state;
    }
};


const Main = () => {
    const [availableTimes, dispatch] = useReducer(reducer, initialTimes);

    const updateTimes = (date) => {
        dispatch({ type: "UPDATE_TIME", data: date })
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/:navItem" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />}></Route>
            </Routes>
        </main>
    )
}

export default Main;

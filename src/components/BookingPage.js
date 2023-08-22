import { useState } from "react";


const BookingPage = ({ availableTimes = [], updateTimes }) => {
    const [state, setState] = useState({});
    const { resDate = "", resTime = "", guests = 1, occasion = "birthday" } = state;

    const handleChange = (key, value) => {
        setState((state) => ({ ...state, [key]: value }))
        if (key === "resDate") {
            updateTimes(value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            resDate,
            resTime,
            guests,
            occasion
        }
        console.log(data)
        setState({})
    }

    return (
        <>
            <section>
                <form style={{ display: "grid", maxWidth: '200px', gap: "20px" }} onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input required type="date" id="res-date" value={resDate} onChange={(event) => handleChange("resDate", event.target.value)} />
                    <label htmlFor="res-time">Choose time</label>
                    <select required id="res-time" value={resTime} onChange={(event) => handleChange("resTime", event.target.value)}>
                        {
                            availableTimes?.map(item =>
                                <option key={item}>{item}</option>
                            )
                        }
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input required type="number" value={guests} placeholder="1" min="1" max="10" id="guests"
                        onChange={(event) => handleChange("guests", event.target.value)} />
                    <label htmlFor="occasion">Occasion</label>
                    <select required id="occasion" value={occasion} onChange={(event) => handleChange("occasion", event.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <input type="submit" value="Make Your reservation" />
                </form >
            </section>
        </>
    )
}

export default BookingPage;

import { useNavigate } from "react-router-dom";
import RestaurantFood from "../assets/restauranfood.jpg";

const CallToAction = () => {
    const navigate = useNavigate()
    return (
        <section className="callToAction">
            <article>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    We are a family owned<br />
                    Mediterraean restaurant,<br />
                    focused on traditional<br />
                    recipes served with a modern<br />
                    twist.
                </p>
                <button onClick={() => navigate("/booking")}>
                    Reserve a Table
                </button>
            </article>
            <img src={RestaurantFood} alt="restaurantfood.jpg" />
        </section>
    )
}

export default CallToAction;

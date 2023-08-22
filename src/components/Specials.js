import LemonDesert from "../assets/lemon dessert.jpg";
import GreekSalad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import { useNavigate } from "react-router-dom";

const items = [
    {
        key: 'greekSalad',
        name: 'Greek Salad',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons`,
        price: '$12.99',
        src: GreekSalad
    },
    {
        key: 'bruchetta',
        name: 'Bruchetta',
        description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and 
        seasoned with salt and olive oil.`,
        price: '$5.99',
        src: Bruchetta
    },
    {
        key: 'lemonDessert',
        name: 'Lemo Desert',
        description: `This comes straight from grandma's recipe book, 
        every last ingredient has sourced and is as authentic as can be imagined.`,
        price: '$5.00',
        src: LemonDesert
    }
]

const Specials = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="specials">
                <h1>This weeks specials!</h1>
                <button onClick={() => navigate("/menu")}>Online Menu</button>
            </section>
            <section className="specials">
                {
                    items.map(item => (
                        <article key={item.key}>
                            <img src={item.src} alt="check" />
                            <div>
                                <h3>{item.name}</h3>
                                <h3 style={{ color: 'orange' }}>{item.price}</h3>
                            </div>
                            <div>
                                {item.description}
                            </div>
                            <div>
                                <b style={{ cursor: 'pointer' }}>
                                    Order a delivery
                                </b>
                            </div>
                        </article>
                    ))
                }
            </section>
        </>
    )
}

export default Specials;
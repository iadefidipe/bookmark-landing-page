import Card from "./Card"
import { StyledCard } from "./style/Cards.style"


const Cards = ({data}) => {
    return (
        <StyledCard>

            {data.map( (card) => ( <Card key={card.id} logo = {card.image} alt = {card.imageAlt} title = {card.title} description = {card.description} buttonText ={card.buttonText} link = {card.link} margin = {card.margin}  /> ) )}

        </StyledCard>
    )
}

export default Cards

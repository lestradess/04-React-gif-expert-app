import { getGifts } from "../helpers/getGifs";




export const GitGrid = ({ category }) => {


    getGifts(category);
    
    return (
        <>
            <h3>{ category }</h3>
            <p>Hola mundo</p>
        </>
    )
}

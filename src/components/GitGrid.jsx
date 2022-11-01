import { GifItem } from "./GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs";



export const GitGrid = ({ category }) => {

    const {images, isLoading}= useFetchGifs (category);

    // const [ images, setImages ] = useState([])

    // const getImages = async () => {
    //     const newImages = await getGifts(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, []);


    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key= {image.id}
                        //Notas De esta forma compartimos todas las propiedades
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

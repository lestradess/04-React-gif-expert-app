import { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [ images, setImages ] = useState([])
    const [isLoading, setLoading ] = useState(true);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}

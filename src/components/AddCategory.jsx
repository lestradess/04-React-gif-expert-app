import { useState } from "react"

export const AddCategory = () => {

    const [ imputValue, setInputValue ] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(imputValue);
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ imputValue }
                onChange={ onInputChange }
            />
        </form>

    )
}

import { useState } from "react"

//Notas Se crea la función AddCategory para añadir categorias
export const AddCategory = ({ onNewCategory }) => {
    //Notas De esta forma definimos un arreglo en el que se pueden
    /////// insertar elementos gracias a su set.
    const [ inputValue, setInputValue ] = useState()

    //Notas Recoge los cambios de la caja de texto
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    //Notas Recoge los eventos de la caja de texto
    const onSubmit = (event) => {
        //Notas Controlamos los eventos de la caja
        event.preventDefault();

        //Notas Nos aseguramos que si no hay al menos 2 letras ignore el contenido
        if (inputValue.trim().length <= 1) return;
    
        onNewCategory (inputValue.trim());
        //Notas Limpia la caja de texto
        setInputValue('');

    }

    return (
        //Notas Se retorna una caja de texto
        /////// Realmente se toma un argumento y lo mandamos a una funcion
        //NotaOtraformaDeHacerlo
        //<form onSubmit={ (event) => onSubmit(event) }>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

    )
}

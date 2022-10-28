import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GitExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Love', 'war', ]);

    const onAddCategory = () => {
        //Notas categories.push( "light" ); En React no se debe utilizar
        setCategories([ 'Light', ...categories ]);
        //NotaOtraformaDeHacerlo   setCategories(cat => [...cat,'Light']);


    }

    return (
        <>
            {/*Notas título */ }
            <h1>GitExpertApp</h1>
            {/*Input */ }
            <AddCategory />
            {/*Listado de Gif */ }
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                { categories.map(category => {
                    return <li key={ category }>{ category }</li>;
                }) }

            </ol>
            {/*Gif Item */ }
        </>
    )
}

import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GitExpertApp = () => {
    //Notas De esta forma definimos un arreglo en el que se pueden 
    /////// insertar elementos gracias a su set.
    const [ categories, setCategories ] = useState([ 'Love', 'war', ]);
    //Notas 
    const onAddCategory = (newCategory) => {
        setCategories([ newCategory, ...categories ]);
        //NotaOtraformaDeHacerlo   
        //setCategories(cat => [newCategory, ...cat]);


    }

    return (
        <>
            {/*Notas título */ }
            <h1>GitExpertApp</h1>
            {/*Input */ }
            <AddCategory
                onNewCategory={ event => onAddCategory(event) }
            />

            <ol>
                { categories.map(category => {
                    return <li key={ category }>{ category }</li>;
                }) }

            </ol>
            {/*Gif Item */ }
        </>
    )
}

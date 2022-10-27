import React, { useState } from "react";


export const GitExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Love', 'war', ]);

    const onAddCategory = () => {
        //Notas categories.push( "light" ); En React no se debe utilizar
        setCategories([ ...categories, 'Light' ]);
        //NotaOtraformaDeHacerlo   setCategories(cat => [...cat,'Light']);
        //Borrar pruebas 
        console.log('nueva categoria');
        //Borrar pruebas 

    }

    return (    
        <>
            {/*Notas título */ }
            <h1>GitExpertApp</h1>
            {/*Input */ }

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

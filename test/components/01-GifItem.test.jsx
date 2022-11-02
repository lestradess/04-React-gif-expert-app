import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


const title = 'Saitama';
const url = "https://lestradamus.es";

describe('Pruebas en <GifItem />', () => {
    test("debe dew hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        //Notas Esto hace una foto en la carpeta __snapshops__ del estado actual
        /////// del title y la url y compara si es igual a la foto inicial
        expect(container).toMatchSnapshot();
    })
    test("debe mostrar la imagen con el url y el alt indicado", () => {
        render(<GifItem title={ title } url={ url } />);
        //Notas Se utiliza para ver la salida del html en consola.
        //screen.debug();
        //Notas Comparamos que la url de la imagen sea igual a la url
        //expect(screen.getByRole("img").src).toBe( url );
        //Notas Comparamos que el texto alternativo sea igual al título
        //expect(screen.getByRole('img').alt).toBe(title);
        //NotaOtraformaDeHacerlo 
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url + '/');
        expect(alt).toBe(title);

    })
    test('debe de mostrar el titulo del componente', () => {
        render(<GifItem title={ title } url={ url } />);

        //Notas Con el toBeTruthy simplente se analiza que exista
        expect(screen.getByText(title)).toBeTruthy();
    })
})
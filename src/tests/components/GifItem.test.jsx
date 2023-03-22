import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components";

describe('Tests del GifItem component', () => { 
  const title = 'One Piece';
  const url = 'https://mugiwara.com.ar/sanji.jpg';

  test('Tiene que hacer MATCH con el Snapshot', () => {
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el URL y el ALT correct', () => {
    render(<GifItem title={title} url={url} />);
    //Para ver lo que estamos renderizando utilizo el SCREEN.DEBUG()
    
    //expect( screen.getByRole('img').src).toBe(url);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  
  test('El titulo tiene que mostrarse en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect( screen.getByText( title )).toBeTruthy();
  })

});
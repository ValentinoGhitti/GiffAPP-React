import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid></GifGrid>', () => {
  const category = 'Monster';

  test('Debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render( <GifGrid category={category} /> );
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Dr. Tenma',
        url: 'https://Dieter.com/tenma.gif'
      },
      {
        id: '123',
        title: 'Nina',
        url: 'https://Dieter.com/Nina&Johan.gif'
      }
    ];
    
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render( <GifGrid category={category} /> );
    expect( screen.getAllByRole('img').length).toBe(2);
  });
});
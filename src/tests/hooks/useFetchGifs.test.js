import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook <useFetchGifs></useFetchGifs>', () => {
  test('Debe retornar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('Oyasumi Punpun'));
    const {images, isLoading} = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe retornar un array de imagenes y el isLoading estar en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Oyasumi Punpun'));

    await waitFor(
      () => expect( result.current.images.length).toBeGreaterThan(0),
      //opcional
      {
        timeout: 1000
      }
    );
    
    const {images, isLoading} = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
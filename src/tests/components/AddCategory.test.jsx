import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
  test('Debe de cambiar el valor del INPUT ', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Berserk'} } );
    expect(input.value).toBe('Berserk');
    // screen.debug();
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Berserk';
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue} } );
    fireEvent.submit( form );

    expect(input.value).toBe('')
  });
});
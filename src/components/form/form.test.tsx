import { render, screen, fireEvent } from '@testing-library/react';
import { UserForm } from './formUser';

describe('Given Form component', () => {
  describe('When we instantiate', () => {
    render(<UserForm></UserForm>);
    test('Then it should submit the form with valid data', () => {
      const nameInput = screen.getByLabelText('User Name');
      const lastNameInput = screen.getByLabelText('Last Name');
      const birthdateInput = screen.getByLabelText('Tu fecha de nacimiento:');
      const maleRadioButton = screen.getByLabelText('Hombre');
      const emailInput = screen.getByLabelText('Email');
      const newsletterCheckbox = screen.getByLabelText(
        '¿Quieres sucribirte a nuestra Newsletter?'
      );
      const submitButton = screen.getByText('Enviar');

      fireEvent.change(nameInput, { target: { value: 'Pepe' } });
      fireEvent.change(lastNameInput, { target: { value: 'Perez' } });
      fireEvent.change(birthdateInput, { target: { value: '2000-01-01' } });
      fireEvent.click(maleRadioButton);
      fireEvent.change(emailInput, {
        target: { value: 'pepeperez@example.com' },
      });
      fireEvent.click(newsletterCheckbox);
      fireEvent.click(submitButton);
    });
  });
});

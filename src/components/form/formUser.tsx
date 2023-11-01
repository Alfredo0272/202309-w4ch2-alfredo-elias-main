import './formUser.scss';
import { PersonalData } from '../../model/personalData';
import { SyntheticEvent, useState } from 'react';

export function UserForm() {
  const initialState: PersonalData = {
    name: '',
    lastName: '',
    birthdate: 0,
    gender: null,
    email: '',
    newsletter: false,
  };
  const [userState, setUserState] = useState(initialState);

  const saveDataToLocalStorage = (data: PersonalData) => {
    localStorage.setItem('userData', JSON.stringify(data));
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const allFilled =
      userState.name &&
      userState.lastName &&
      userState.birthdate &&
      userState.gender &&
      userState.email &&
      userState.newsletter;

    if (allFilled) {
      saveDataToLocalStorage(userState);
    }
    console.log(userState);
  };

  const handleChange = (ev: SyntheticEvent) => {
    const control = ev.target as HTMLFormElement;
    const name = control.name;
    const lastName = control.lastName;
    const birthdate = control.birthdate;
    const gender = control.gender;
    const email = control.email;
    const newsleter =
      control.type === 'checkbox' ? control.checked : control.value;
    setUserState({
      ...userState,
      [name]: control.value,
      [lastName]: control.value,
      [birthdate]: control.value,
      [gender]: control.value,
      [email]: control.value,
      [newsleter]: control.value,
    });
  };

  return (
    <>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <fieldset>
            <legend>User data</legend>
            <div className="user-name-and-last-name__container">
              <div className="name-container">
                <label htmlFor="user-name">User Name</label>
                <input
                  type="text"
                  name="name"
                  id="user-name"
                  onChange={handleChange}
                  placeholder="Dime tu nombre"
                  required
                />
              </div>
              <div className="lastname-container">
                <label htmlFor="user-lastname">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="user-lastname"
                  onChange={handleChange}
                  placeholder="Dime tu apellido"
                  required
                />
              </div>
            </div>
          </fieldset>
          <div className="birthdate-container">
            <label htmlFor="birthdate">Tu fecha de nacimiento:</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              onChange={handleChange}
              required
            />
          </div>
          <div className="gender-container">
            <fieldset onChange={handleChange}>
              <legend>Selecciona tu género</legend>
              <label>
                <input type="radio" name="gender" value="male" required />
                Hombre
              </label>
              <label>
                <input type="radio" name="gender" value="female" required />
                Mujer
              </label>
              <label>
                <input type="radio" name="gender" value="other" required />
                Otro
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="prefer not to answer"
                  required
                />
                Prefiero no contestar
              </label>
            </fieldset>
          </div>
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="newsletter-container">
            <label htmlFor="newsletter">
              ¿Quieres sucribirte a nuestra Newsletter?
            </label>
            <input
              type="checkbox"
              name="newsletter"
              id="newsletter"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}

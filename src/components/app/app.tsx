import './app.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { UserForm } from '../form/formUser';

export function App() {
  return (
    <div className="container">
      <Header></Header>
      <UserForm></UserForm>
      <Footer></Footer>
    </div>
  );
}

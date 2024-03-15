import { Registerform } from '../../components/Register/RegisterForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={css.box}>
      <h1 className={css.name}>Registration</h1>
      <Registerform />
    </div>
  );
}

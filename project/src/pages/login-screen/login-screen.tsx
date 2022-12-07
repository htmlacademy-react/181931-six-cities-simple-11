import { useRef, FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../const';
import { setUserEmailAction } from '../../store/action';
import { toast } from 'react-toastify';

function LoginScreen(): JSX.Element {
  const navigate = useNavigate();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    dispatch(setUserEmailAction(authData.login));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const password = passwordRef.current.value.trim();
      const reg = /^(?=.*\d)(?=.*[a-zA-Z]).{2,20}$/;

      if (!reg.test(password) || password.length < 2) {
        toast.warn('the password consists of at least one letter and a number');
        return;
      }

      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );


  useEffect(() => {
    authorizationStatus === AuthorizationStatus.Auth && navigate(AppRoute.Main);
  }, [authorizationStatus, navigate]);

  return (
    <main className='page__main page__main--login'>
      <div className='page__login-container container'>
        <section className='login'>
          <h1 className='login__title'>Sign in</h1>
          <form
            className='login__form form'
            action='#'
            method='post'
            onSubmit={handleSubmit}
          >
            <div className='login__input-wrapper form__input-wrapper'>
              <label className='visually-hidden'>E-mail</label>
              <input
                ref={loginRef}
                className='login__input form__input'
                type='email'
                name='email'
                placeholder='Email'
                required
              />
            </div>
            <div className='login__input-wrapper form__input-wrapper'>
              <label className='visually-hidden'>Password</label>
              <input
                ref={passwordRef}
                className='login__input form__input'
                type='password'
                name='password'
                placeholder='Password'
                required
              />
            </div>
            <button
              className='login__submit form__submit button'
              type='submit'
            >
              Sign in
            </button>
          </form>
        </section>
        <section className='locations locations--login locations--current'>
          <div className='locations__item'>
            <Link className='locations__item-link' to={AppRoute.Main}>
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;

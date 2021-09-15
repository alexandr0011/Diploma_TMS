import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from '../../service/middleware';
import './Register.scss';
import { setServiceErrorsAction } from '../../Redux/actions';
import { Redirect } from 'react-router-dom';
import { Button, Input } from '../common/formControls/formControls';
const TASKS_PAGE = '/tasksPage';

export const Register = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const serviceError = useSelector((state) => state.errors);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setServiceErrorsAction(''));
    };
  }, [dispatch]);

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(registerUserThunk(name, email, password));
    setName('');
    setEmail('');
    setPassword('');
  };

  if (isAuth) return <Redirect to={TASKS_PAGE} />;

  return (
    <div className="registerWrapper">
      <h1>REGISTER PAGE</h1>
      <form onSubmit={onSubmitHandler}>
        <p>Enter your Name</p>
        <div>
          <Input
            placeholder="Name"
            type="text"
            value={name}
            onChange={nameInputHandler}
          />
        </div>
        <p>Enter your Email</p>
        <div>
          <Input
            placeholder="Email"
            type="text"
            value={email}
            onChange={emailInputHandler}
          />
        </div>
        <p>Enter your Password</p>
        <div>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordInputHandler}
          />
        </div>
        {serviceError && <div className="serviceErrorMessage">{serviceError}</div>}
        <div>
          <Button type="submit">Confirm</Button>
        </div>
      </form>
    </div>
  );
};

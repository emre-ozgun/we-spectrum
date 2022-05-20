import React from 'react'
import './Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { submitCredentials, selectAuth, resetCredentials } from '../../features/mapData/authSlice';

const LoginForm = () => {


  const dispatch = useDispatch();

  const [disabled, setDisabled] = React.useState(true);

  const { error } = useSelector(selectAuth);

  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  })

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }

  }, [])

  React.useEffect(() => {

    if (!credentials.email || !credentials.password) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

  }, [credentials.email, credentials.password])

  React.useEffect(() => {
    let timeout;

    if (error) {
      timeout = setTimeout(() => {
        dispatch(resetCredentials())
      }, 4000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    };

  }, [error, dispatch])

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(submitCredentials(credentials));

    setCredentials({
      email: '',
      password: '',
    })

  }

  return (
    <section className='section section-auth'>

      <form className='form' onSubmit={handleFormSubmit}>
        <h1 className='form-title'>WESPECTRUM | LOGIN</h1>
        {error && (
          <div className="form-control">
            <label className='form-msg'>Invalid credentials use mock credentials below</label>
            <label className='form-msg c'>admin@admin.com</label>
            <label className='form-msg c'>admin123</label>

          </div>
        )}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            ref={inputRef}
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })}
            type="email" id='email' name='email' placeholder='Your email...' />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })}
            type="password" id='password' name='password' placeholder='Your password...' />
        </div>

        <button disabled={disabled} className='btn btn-submit'>Login</button>
      </form>

    </section>
  )
}

export default LoginForm
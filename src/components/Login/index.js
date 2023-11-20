import React, { useState } from 'react';
import Swal from 'sweetalert2';
import LofinImages from './login images.webp'

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'siva@example.com';
  const adminPassword = 'Siva@2001';

  const [email, setEmail] = useState('siva@example.com');
  const [password, setPassword] = useState('Siva@2001');
  const [hide, sethide] = useState(true)

  const handleLogin = e => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    }
    else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <>

      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Wellcome here!</h1>

            <p className="mt-4 text-gray-500">
              "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do." <br /><b><i>- Pele</i></b>
            </p>
          </div>

          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlfor="email" className="sr-only">Email</label>

              <div className="relative">
                <input

                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ring-2 ring-blue-400"

                  id="email"
                  type="email"
                  name="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlfor="password" className="sr-only">Password</label>

              <div className="relative">
                <input

                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ring-2 ring-blue-400"

                  id="password"
                  type={hide ? "password" : "text"}
                  name="password"
                  placeholder="qwerty"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />

                <button type='button' onClick={() => sethide(false)} className="absolute inset-y-0 end-0 grid place-content-center px-4">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"

                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>

                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">


              <button
                type="submit"
                className="w-full inline-block rounded-lg bg-blue-500 px-5 py-3  font-medium text-white text-md"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src={LofinImages}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>


  );
};

export default Login;

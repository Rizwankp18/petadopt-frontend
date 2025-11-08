import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { loginApi, registerApi } from '../../../service/AllApi';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  // Handle Login
  const handleLogin = async () => {
    const { email, password } = loginData;

    if (!email || !password) {
      toast.info('Fill the form completely');
      return;
    }

    try {
      const result = await loginApi(loginData);
      console.log(result);

      if (result.status === 200) {
        toast.success('Login successfully');
        sessionStorage.setItem('existingUser', JSON.stringify(result.data.existingUser));
        sessionStorage.setItem('token', result.data.token);
        setLoginData({ email: '', password: '' });
        navigate('/');
      } else if (result.status === 401 || result.status === 406) {
        toast.warning(result.response.data);
        setLoginData({ email: '', password: '' });
      } else {
        toast.warning(result.response.data);
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  // Handle Register
  const handleRegister = async () => {
    const { fullname, email, password } = registerData;

    if (!fullname || !email || !password) {
      toast.info('Fill the form completely');
      return;
    }

    try {
      const result = await registerApi(registerData);
      console.log(result);

      if (result.status === 200) {
        toast.success('Registered successfully');
        setRegisterData({ fullname: '', email: '', password: '' });
      } else if (result.status === 406) {
        toast.warning(result.response.data);
        setRegisterData({ fullname: '', email: '', password: '' });
      } else {
        toast.error('Something went wrong');
        setRegisterData({ fullname: '', email: '', password: '' });
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg mt-10 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome Back 👋
        </h2>

        {/* Login Form */}
        <form>
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition mt-5"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Register Form */}
        <form>
          <div>
            <label className="text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              value={registerData.fullname}
              onChange={(e) => setRegisterData({ ...registerData, fullname: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
          </div>
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition mt-5"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;

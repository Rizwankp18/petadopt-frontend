import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAdminApi } from '../../../service/AllApi';
import { toast } from 'react-toastify';

function Adminlogin() {
const [adminLogin,setAdminLogin]=useState({

  email:"",
  password:""
})

const navigate= useNavigate()

const handleLogin = async () => {
    const { email, password } = adminLogin;

    if (!email || !password) {
      toast.info('Fill the form completely');
      return;
    }

    try {
      const result = await loginAdminApi(adminLogin);
      console.log(result);

      if (result.status === 200) {
        toast.success('Login successfully');
        sessionStorage.setItem('existingAdmin', JSON.stringify(result.data.existingAdmin));
        (sessionStorage.setItem('token', result.data.token))
       
        setAdminLogin({ email: '', password: '' });

setTimeout(()=>{
navigate('/dashboard');
},3000)

        
      } else if (result.status === 401 || result.status === 406) {
        toast.warning(result.response.data);
      setAdminLogin({ email: '', password: '' });
      } else {
        toast.warning(result.response.data);
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };



  return (
<>
 <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Admin Login
        </h2>

        <form className="">
          {/* Email */}
          <div>
            <label className=" text-sm font-medium text-gray-600">
              Email
            </label>
            <input
            value={adminLogin.email}
            onChange={(e)=>setAdminLogin({...adminLogin,email:e.target.value})}
              type="email"
              placeholder="admin@example.com"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Password */}
          <div>
            <label className=" text-sm font-medium text-gray-600">
              Password
            </label>
            <input
                        value={adminLogin.password}

              type="text"
              placeholder="********"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg"
                          onChange={(e)=>setAdminLogin({...adminLogin,password:e.target.value})}

            />
          </div>

          {/* Submit Button */}
        
            <button
              type="button"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-500 transition mt-4"
onClick={handleLogin}
            >
              Login
            </button>
        
        </form>

        {/* Optional Info */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          Only authorized admins can access this panel.
        </p>
      </div>
    </div>

</>


)
}

export default Adminlogin
import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Admin } from '../../../main';

const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false);

   const {formData,setFormData} = useContext(Admin);

 const navigate = useNavigate();

 console.log(formData)


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  };

  return (
    <>

      <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
       <div className="w-full max-w-md">

    {/* Mobile Logo */}
    <div className="mb-10 flex items-center gap-3 md:hidden">
      <div className="rounded-xl bg-[#144667] p-3 text-white">
        <ShieldCheck size={26} />
      </div>
      <div>
        <h2 className="text-xl font-bold text-[#144667]">PassFlow</h2>
        <p className="text-[10px] tracking-[2px] text-gray-500">
          GATE PASS SYSTEM
        </p>
      </div>
    </div>

    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800">
        Welcome Back!
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Please enter your credentials to access your account.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Email Address
        </label>

        <div className="flex items-center rounded-xl border border-gray-200 bg-[#f5f8fa] px-4 transition focus-within:border-[#144667] focus-within:ring-4 focus-within:ring-[#144667]/10">
          <Mail size={19} className="text-[#144667]" />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full bg-transparent px-3 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Password
        </label>

        <div className="flex items-center rounded-xl border border-gray-200 bg-[#f5f8fa] px-4 transition focus-within:border-[#144667] focus-within:ring-4 focus-within:ring-[#144667]/10">
          <Lock size={19} className="text-[#144667]" />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full bg-transparent px-3 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 transition hover:text-[#144667]"
          >
            {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="h-4 w-4 accent-[#144667]"
            required
          />
          Remember me
        </label>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="group flex w-full cursor-pointer items-center justify-center
         gap-3 rounded-xl bg-gradient-to-r from-[#0d3048] to-[#28769a] py-3.5 
         text-sm font-bold text-white shadow-lg shadow-[#144667]/20 transition 
         duration-300 hover:-translate-y-0.5 hover:shadow-xl"
      >
        Sign In
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </button>

    </form>
  </div>
</div>

    </>
  )
}

export default LoginForm
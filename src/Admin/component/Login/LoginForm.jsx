import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

 const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/')
  };

  return (
    <>

      <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">

        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="mb-10 flex items-center gap-3 md:hidden">
            <div className="rounded-xl bg-[#245b3e] p-3 text-white">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#245b3e]">PassFlow</h2>
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

          <form onSubmit={handleSubmit}
            className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <div className="flex items-center rounded-xl border border-gray-200
                 bg-[#f9fbf8] px-4 transition focus-within:border-[#56805d] 
                 focus-within:ring-4 focus-within:ring-[#56805d]/10">
                <Mail size={19} className="text-[#56805d]" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent px-3 py-3.5 text-sm text-gray-700 
                    outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-[#f9fbf8] px-4 transition focus-within:border-[#56805d] focus-within:ring-4 focus-within:ring-[#56805d]/10">
                <Lock size={19} className="text-[#56805d]" />

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
                  className="text-gray-400 transition hover:text-[#245b3e]"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex flex-wrap items-center justify-between gap-3">

              <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 accent-[#245b3e]"
                  required
                />
                Remember me
              </label>

            </div>

            {/* Login Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 
                rounded-xl bg-gradient-to-r from-[#245b3e] to-[#56805d] py-3.5 
                text-sm font-bold text-white shadow-lg shadow-[#245b3e]/20 
                transition duration-300 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
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
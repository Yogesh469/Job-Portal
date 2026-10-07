
import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white p-12 flex-col justify-center">

          <p className="text-blue-200 font-semibold uppercase tracking-wider text-sm">
            Welcome Back
          </p>

          <h1 className="text-4xl font-bold mt-3 leading-tight">
            Find Your Next
            <br />
            Career Opportunity
          </h1>

          <p className="text-blue-100 mt-6 leading-7">
            Login to your account and explore thousands of job
            opportunities from companies looking for talented people.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                ✓
              </div>
              <span>Find jobs that match your skills</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                ✓
              </div>
              <span>Connect with top companies</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                ✓
              </div>
              <span>Build your professional career</span>
            </div>

          </div>

        </div>


        {/* Right Side */}
        <div className="p-8 md:p-12">

          {/* Heading */}
          <div className="text-center mb-8">

            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto">
              JP
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mt-5">
              Welcome Back!
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue to your account
            </p>

          </div>


          {/* Login Form */}
          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>


            {/* Password */}
            <div>

              <div className="flex justify-between items-center mb-2">

                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Forgot Password?
                </button>

              </div>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-16 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-600 font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Remember Me */}
            <div className="flex items-center gap-2">

              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />

              <span className="text-sm text-gray-600">
                Remember me
              </span>

            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:bg-blue-700
                hover:shadow-lg
                hover:shadow-blue-200
                active:scale-[0.98]
                transition-all
                duration-200
              "
            >
              Login
            </button>


            {/* Divider */}
            <div className="flex items-center gap-4 my-6">

              <div className="flex-1 border-t border-gray-200"></div>

              <span className="text-sm text-gray-400">
                OR
              </span>

              <div className="flex-1 border-t border-gray-200"></div>

            </div>


            {/* Google Button */}
            <button
              type="button"
              className="
                w-full
                border border-gray-200
                text-gray-700
                py-3
                rounded-xl
                font-semibold
                hover:bg-gray-50
                hover:border-gray-300
                transition
              "
            >
              Continue with Google
            </button>

          </form>


          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-8">

            Don't have an account?

            <button className="text-blue-600 font-semibold ml-1 hover:text-blue-700">
              Register Now
            </button>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;


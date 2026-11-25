import React, { useState } from "react";
import { ShieldCheck} from "lucide-react";
import LoginForm from "../component/Login/LoginForm";

const Login = () => {


  return (
   <div className="min-h-screen flex items-center justify-center bg-[#f3f7fa] p-4">

  <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#144667]/10 md:grid md:grid-cols-2">

    {/* Left Section */}
    <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0d3048] via-[#144667] to-[#28769a] p-12 text-white md:flex">

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[35px] border-white/10" />
      <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-white/5" />

      <div className="relative z-10 flex items-center gap-3">
        <div className="rounded-xl bg-white/15 p-3">
          <ShieldCheck size={30} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-wide">PassFlow</h2>
          <p className="text-xs tracking-[3px] text-white/70">GATE PASS SYSTEM</p>
        </div>
      </div>

      <div className="relative z-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#b9d9ec]">
          Secure Access Management
        </p>

        <h1 className="text-4xl font-bold leading-tight">
          Manage Your
          <br />
          Workplace Access
          <br />
          With Confidence.
        </h1>

        <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
          A smarter way to manage gate passes, employees, visitors and
          approvals — all in one secure platform.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="h-9 w-9 rounded-full border-2 border-[#144667] bg-[#d1e3ee]" />
            <div className="h-9 w-9 rounded-full border-2 border-[#144667] bg-[#a8c8dc]" />
            <div className="h-9 w-9 rounded-full border-2 border-[#144667] bg-[#e6d9bd]" />
          </div>
          <p className="text-xs text-white/80">
            Secure • Simple • Efficient
          </p>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <LoginForm />

  </div>
</div>
  );
};

export default Login;

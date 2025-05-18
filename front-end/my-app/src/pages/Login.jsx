import React from 'react';

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center pb-20">
      <div className="flex flex-col items-center gap-6 p-6">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-3xl">Faça seu Login</h3>
        </div>

        <div className="flex flex-col items-center gap-3">
          <input
            type="email"
            placeholder="email"
            className="w-80 h-10 px-3 border border-sky-600 rounded-md shadow-sm shadow-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="password"
            placeholder="password"
            className="w-80 h-10 px-3 border border-sky-600 rounded-md shadow-sm shadow-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button className="w-80 h-12 bg-sky-600 rounded-md text-white font-bold shadow-md shadow-sky-300 hover:bg-sky-700 transition">
            Login
          </button>
          <p className="text-sm text-gray-600">
            Ainda não tem sua conta?{' '}
            <span className="underline font-semibold text-sky-700 cursor-pointer">
              Registre-se aqui
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

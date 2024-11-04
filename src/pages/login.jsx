import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword,GoogleAuthProvider, createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Login component mounted');
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Attempting to log in with", email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in: ' + error.message);
    }
  };

  const handleRegister = async () => {
    console.log("Attempting to register with", email, password);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Error registering: ' + error.message);
    }
  };
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google login successful:', user);
      alert('Google login successful');
    } catch (error) {
      console.error('Error logging in with Google:', error);
      alert('Error logging in with Google: ' + error.message);
    }
  };

  return (
    <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-lg p-6 lg:p-12 bg-white shadow-md rounded-lg'>
        <div className='w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center items-center bg-gray-100 rounded-lg text-center'>
          <h1 className="text-3xl lg:text-4xl font-bold">Ainda não tem conta?</h1>
          <button onClick={handleGoogleLogin} className="mt-8 lg:mt-40 bg-emerald-400 py-2.5 px-5 rounded-lg text-white border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base">
            Login com Google
          </button>
          <p className='mt-8 lg:mt-24 text-lg lg:text-xl'>Aproveite ao máximo nossa plataforma - crie sua conta agora!</p>
          <button onClick={handleRegister} className="mt-8 lg:mt-40 bg-emerald-400 py-2.5 px-5 rounded-lg text-white border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base">
            Cadastre-se
          </button>
        </div>
        <div className='w-full lg:w-1/2 mt-10 lg:mt-0 pt-10 lg:pt-0 lg:pl-12 text-center lg:text-left'>
          <h2 className='text-3xl lg:text-4xl font-bold'>SIGN-IN</h2>
          <form onSubmit={handleLogin} className='mt-6 lg:mt-20 flex flex-col items-center lg:items-start'>
            <div className="mb-6 w-full lg:w-72 text-center lg:text-left">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu email"
              />
            </div>
            <div className="mb-6 w-full lg:w-72 text-center lg:text-left">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Senha:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite sua senha"
              />
            </div>
            <button className='mt-6 lg:mt-20 w-full lg:w-72 bg-emerald-400 py-2.5 px-5 rounded-lg text-white border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base' type="submit">ENTRAR</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

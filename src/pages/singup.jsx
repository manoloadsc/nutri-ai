import React, { useState } from 'react';
import { auth } from '../firebase/config'; // Certifique-se de que o caminho está correto
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered:', user);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Erro ao cadastrar: ' + error.message);
    }
  };

  return (
    <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-lg p-6 lg:p-12 bg-white shadow-md rounded-lg'>
        
        <div className='w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center items-center bg-gray-100 rounded-lg text-center'>
          <h1 className="text-3xl lg:text-4xl font-bold">Já tem conta?</h1>
          <p className='mt-8 lg:mt-24 text-lg lg:text-xl'>Aproveite ao máximo nossa plataforma - Acesse sua conta agora!</p>
          <button onClick={() => {}} className="mt-8 lg:mt-40 bg-emerald-400 py-2.5 px-5 rounded-lg text-white border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base">
            Login
          </button>
        </div>

        <div className='w-full lg:w-1/2 mt-10 lg:mt-0 pt-10 lg:pt-0 lg:pl-12 text-center lg:text-left'>
          <h2 className='text-3xl lg:text-4xl font-bold'>SIGN-UP</h2>
          <form onSubmit={handleSignup} className='mt-6 lg:mt-20 flex flex-col items-center lg:items-start'>
            <div className="mb-6 w-full lg:w-72 text-center lg:text-left">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu nome"
              />
            </div>
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
            <button className='mt-6 lg:mt- w-full lg:w-72 bg-emerald-400 py-2.5 px-5 rounded-lg text-white border border-emerald-600 font-medium text-sm outline-none transition duration-100 hover:bg-emerald-500 focus-visible:ring ring-emerald-300 active:bg-emerald-600 md:text-base' type="submit">CADASTRAR-SE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;


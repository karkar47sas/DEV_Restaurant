"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';

const login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  // const typeUserRef = useRef<HTMLInputElement>(null);
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    setLoading(true);
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();
    // const typeUser = typeUserRef.current?.value.trim();
    try {
      console.log("Login attempt with:", { email, password });
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem('userId', response.data._id);
      const {
        token,
        username,
        email: emailUser
      }: {
        token: string;
        typeUser: string;
        username: string;
        email: string;
      } = response.data;


      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ username, email }));
      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event("authChange"));

      console.log('Connecté avec succès', response.data);
      setErrorMessage(null);

      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event("authChange"));
      setErrorMessage(null);
      // switch (typeUser) {
      //   case "Administrateur":
      //     router.push("/admin");
      //     break;
      //   case "Cuisinier":
      //     router.push("/cuisinier");
      //     break;
      //   case "Client":
      //     router.push("/client");
      //     break;
      //   default: break;
      // }
      router.push("/");
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || "Erreur de connexion.");
      } else {
        setErrorMessage("Erreur inconnue.");
      }
    }
  }
  return (
    <div>
      <h1 className="text-center mb-5 mt-5">Login</h1>
      <div className="border-2 border-red-500 rounded-xl px-5 py-5 max-w-5xl mx-auto">
        <p className="text-center text-xl mt-3">
          Vous n'avez pas de compte ?
          <a href="/register" className="text-gray-500 hover:text-red-500"> register</a>
        </p>
        <form className="text-center" onSubmit={handleLogin}>
          <label className="text-xl">Email: </label><br />
          <input type="email" ref={emailRef} required className="mb-2 mt-2 w-50 border px-3 py-2 rounded" /><br />
          <label className="text-xl">Mot de passe: </label><br />
          <input type="password" ref={passwordRef} required className="mb-2 mt-2 w-50 border px-3 py-2 rounded" /><br />
          {errorMessage && (
            <div className="text-red-600 bg-red-100 border border-red-400 p-3 rounded text-center">
              {errorMessage}
            </div>
          )}
          <input type="submit" disabled={loading} className="border bg-red-500 text-white text-2xl mb-3 mt-3 rounded-lg px-8 py-2" />
        </form>
      </div>
    </div>
  );
};

export default login;

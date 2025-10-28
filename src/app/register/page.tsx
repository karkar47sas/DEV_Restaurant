"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';

const register = () => {

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [numCDI, setNumCDI] = useState(0);
  // const [typeUser, setTypeUser] = useState("");
  // const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const numCDIRef = useRef<HTMLInputElement>(null);
  const typeUserRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const username = usernameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const numCDI = numCDIRef.current?.value.trim();
    const typeUser = typeUserRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    if (!username || !email || !numCDI || !typeUser || !password) {
      setErrorMessage("username, email, numCDI ,typeUser ou mot de passe manquant");
      setLoading(false);
      return;
    }
    try {
      await axios.post("http://localhost:5000/auth/register", { username, email, numCDI, typeUser, password });
      setSuccessMessage("Inscription réussie !");
      setErrorMessage(null);
      setLoading(false);
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (error) {
      // console.error("Erreur lors de l'inscription", error);
      setSuccessMessage(null);
      setErrorMessage("Une erreur est survenue...");
      setLoading(false);
      if (axios.isAxiosError(error)) {
        // console.error('Erreur lors de la connexion:', error.response?.data);
        setErrorMessage(error.response?.data?.message || "Erreur lors de l'inscription.");
      } else {
        // console.error('Erreur inconnue:', error);
        setErrorMessage("Erreur inconnue.");
      }
    }
  }


  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Register</h1>
      <div className="border-2 border-red-500 rounded-xl px-5 py-5 max-w-5xl mx-auto">
        <form className="text-center" onSubmit={handleSubmit}>
          <label className="text-xl">Username:</label><br />
          <input type="text"
            // value={username}
            ref={usernameRef}
            // onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            className="mb-2 mt-2 w-50 border px-3 py-2 rounded focus:ring-2" required /><br />

          <label className="text-xl">Email:</label><br />
          <input type="email"
            // value={email}
            ref={emailRef}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className="mb-2 mt-2 w-50 border px-3 py-2 rounded focus:ring-2" required /><br />

          <label className="text-xl">Numéro de la carte d'identité:</label><br />
          <input type="number"
            // value={numCDI}
            ref={numCDIRef}
            // onChange={(e) => setNumCDI(e.target.value)}
            placeholder="Numéro de la carte d'identité"
            className="mb-2 mt-2 w-50 border px-3 py-2 rounded focus:ring-2" required /><br />

          <label className="text-xl">Type de l'utilisateur:</label><br />
          <select name="" id=""
            // value={typeUser}
            // ref={typeUserRef}
            // onChange={(e) => setTypeUser(e.target.value)}
            className="mb-2 mt-2 w-50 border px-3 py-2 rounded focus:ring-2" required >
            <option value="">Administrateur</option>
            <option value="">Cuisinier</option>
            <option value="">Client</option>
          </select>
          <br />

          <label className="text-xl">Mot de passe:</label><br />
          <input type="password"
            // value={password}
            ref={passwordRef}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder='Mot de passe'
            className="mb-2 mt-2 w-50 border px-3 py-2 rounded focus:ring-2" required /><br />

          {successMessage && (
            <div className="text-green-600 bg-green-100 border border-green-400 p-3 rounded text-center">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="text-red-600 bg-red-100 border border-red-400 p-3 rounded text-center">
              {errorMessage}
            </div>
          )}

          <input type="reset" className="bg-gray-500 text-white text-2xl mb-3 mt-3 rounded-lg px-8 py-2 mr-5" />

          <input type="submit"
            disabled={loading}
            className="bg-red-500 text-white text-2xl mb-3 mt-3 rounded-lg px-8 py-2 ml-5" />
        </form>

        <p className="text-center text-xl mt-3">
          Vous avez déjà un compte ? <a href="/login" className="text-gray-500 hover:text-red-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default register;

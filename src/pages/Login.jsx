import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config"; 
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); // Context থেকে setUser পাবো

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In:", result.user);
      
      // Context এর user update
      setUser(result.user);

      // Successful toast / alert
      alert("Login Successful!");

      // Home page redirect
      navigate("/");
      
    } catch (error) {
      console.error("Login Error:", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        
        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-2 mb-4 rounded text-center text-sm">
            {errorMessage}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 mt-2 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold cursor-pointer ml-1 hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

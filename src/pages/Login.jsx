import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Email/Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const result = await signInUser(email, password);
      console.log("User Logged In:", result.user);
      alert("Login Successful!");
      navigate("/"); // Login successful -> go to home page
    } catch (error) {
      console.error("Login Error:", error.message);
      setErrorMessage(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setErrorMessage("");
    try {
      const result = await signInWithGoogle();
      console.log("Google Login Success:", result.user);
      alert("Google Login Successful!");
      navigate("/"); // Redirect after login
    } catch (error) {
      console.error("Google Login Error:", error.message);
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

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-3 bg-red-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-200"
        >
          Login with Google
        </button>

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

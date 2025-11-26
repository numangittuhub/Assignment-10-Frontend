import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function AddIssue() {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/issues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          location,
          description,
          amount,
          image,
          userId: user?._id, // <- updated (uid not needed)
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Issue added successfully!");
        setTitle("");
        setCategory("");
        setLocation("");
        setDescription("");
        setAmount("");
        setImage("");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Issue</h2>

      {message && <p className="mb-4 text-center text-green-600">{message}</p>}

      <form className="space-y-3" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" className="w-full border p-2 rounded"
          value={title} onChange={(e) => setTitle(e.target.value)} required />

        <input type="text" placeholder="Category" className="w-full border p-2 rounded"
          value={category} onChange={(e) => setCategory(e.target.value)} required />

        <input type="text" placeholder="Location" className="w-full border p-2 rounded"
          value={location} onChange={(e) => setLocation(e.target.value)} required />

        <textarea placeholder="Description" className="w-full border p-2 rounded"
          value={description} onChange={(e) => setDescription(e.target.value)} required />

        <input type="number" placeholder="Budget Amount" className="w-full border p-2 rounded"
          value={amount} onChange={(e) => setAmount(e.target.value)} required />

        <input type="text" placeholder="Image URL" className="w-full border p-2 rounded"
          value={image} onChange={(e) => setImage(e.target.value)} required />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500">
          Add Issue
        </button>
      </form>
    </div>
  );
}

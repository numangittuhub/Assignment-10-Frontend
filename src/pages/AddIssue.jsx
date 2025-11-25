import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function AddIssue() {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Garbage");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIssue = {
      title,
      category,
      location,
      description,
      image,
      amount,
      email: user?.email,
      date: new Date().toISOString(),
      status: "ongoing"
    };

    console.log("New Issue Submitted:", newIssue);
    alert("Issue submitted successfully!");

    // Clear form
    setTitle("");
    setCategory("Garbage");
    setLocation("");
    setDescription("");
    setImage("");
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Add New Issue</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Issue Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter issue title"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Garbage</option>
              <option>Illegal Construction</option>
              <option>Broken Public Property</option>
              <option>Road Damage</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the issue"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Suggested Fix Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Estimated amount in ৳"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:opacity-90 mt-2 transition duration-200"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
}

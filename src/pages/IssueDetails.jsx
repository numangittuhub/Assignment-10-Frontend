import { useParams } from "react-router-dom";
import issues from "../data/issues";

export default function IssueDetails() {
  const { id } = useParams(); // URL থেকে issue ID নেবে

  // dummy data থেকে matching issue খুঁজে বের করা
  const issue = issues.find((item) => item._id === id);

  if (!issue) {
    return (
      <h2 className="text-center text-2xl font-bold mt-10">
        Issue Not Found 😢
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <img
        src={issue.image}
        alt={issue.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />

      <h2 className="text-3xl font-bold mb-3">{issue.title}</h2>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        <span className="font-semibold">Category:</span> {issue.category} |
        <span className="ml-2 font-semibold">Location:</span> {issue.location}
      </p>

      <p className="text-lg mb-6">{issue.description}</p>

      <p className="font-bold text-xl mb-6">Estimated Budget: ${issue.amount}</p>

      <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg">
        Contribute Now
      </button>
    </div>
  );
}

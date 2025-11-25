import { Link } from "react-router-dom";

export default function IssueCard({ issue }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={issue.image}
        alt={issue.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{issue.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
          {issue.category} | {issue.location}
        </p>
        <p className="text-sm mb-4">{issue.description.slice(0, 60)}...</p>
        <p className="font-semibold mb-2">Budget: ${issue.amount}</p>
        <Link
          to={`/issue/${issue._id}`}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}

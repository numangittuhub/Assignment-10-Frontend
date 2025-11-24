import { Link } from "react-router-dom";

export default function IssueCard({ issue }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img src={issue.image} alt={issue.title} className="w-full h-40 object-cover" />
      
      <div className="p-4">
        <h3 className="text-lg font-bold">{issue.title}</h3>
        <p className="text-sm text-gray-600">{issue.location}</p>
        <p className="text-sm text-primary font-semibold mt-1">{issue.category}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-gray-800">${issue.amountNeeded}</span>
          <Link
            to={`/issue/${issue._id}`}
            className="text-sm bg-primary text-white px-3 py-1 rounded hover:bg-primary/90"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

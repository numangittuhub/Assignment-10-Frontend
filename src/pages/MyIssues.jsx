import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import issues from "../data/issues";
import IssueCard from "../components/IssueCard";

export default function MyIssues() {
  const { user } = useContext(AuthContext);

  // Dummy: Filter only logged user issues (email check later from DB)
  const myIssues = issues.filter((item) => item.userEmail === user?.email);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        My Reported Issues
      </h2>

      {myIssues.length === 0 ? (
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">
          🙁 You haven't added any issues yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {myIssues.map((issue) => (
            <IssueCard key={issue._id} issue={issue} />
          ))}
        </div>
      )}
    </div>
  );
}

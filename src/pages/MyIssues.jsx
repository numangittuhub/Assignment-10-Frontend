import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import IssueCard from "../components/IssueCard";

export default function MyIssues() {
  const { user } = useContext(AuthContext);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchMyIssues = async () => {
      if (!user) return;

      try {
        const res = await fetch(`http://localhost:5000/api/issues/my/${user.uid}`);
        const data = await res.json();
        setIssues(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMyIssues();
  }, [user]);

  if (!user) return <p className="text-center mt-10">Please login to see your issues.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">My Reported Issues</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {issues.length > 0 ? (
          issues.map((issue) => <IssueCard key={issue._id} issue={issue} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No issues reported yet.</p>
        )}
      </div>
    </div>
  );
}

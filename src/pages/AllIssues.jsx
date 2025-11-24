import IssueCard from "../components/IssueCard";
import issues from "../data/issues";

export default function AllIssues() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        All Reported Issues
      </h2>

      {/* Filters section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search issue..."
          className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg w-full sm:w-1/2 bg-white dark:bg-gray-800"
        />

        <select className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg bg-white dark:bg-gray-800">
          <option value="">Filter by Category</option>
          <option value="Garbage">Garbage</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Illegal Construction">Illegal Construction</option>
          <option value="Public Property">Public Property</option>
        </select>
      </div>

      {/* Issues Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {issues.map((issue) => (
          <IssueCard key={issue._id} issue={issue} />
        ))}
      </div>
    </div>
  );
}

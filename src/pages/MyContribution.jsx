export default function MyContribution() {
  const contributions = []; // will come from DB later

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        My Contributions
      </h2>

      {contributions.length === 0 ? (
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">
          😇 No contributions yet.
        </p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-3 text-left">Issue Title</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.issueTitle}</td>
                <td className="p-3">${item.amount}</td>
                <td className="p-3">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

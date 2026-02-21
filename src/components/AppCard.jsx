import { Link } from "react-router-dom";

function AppCard({ app }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{app.title}</h3>
      <p className="text-sm text-gray-500">{app.companyName}</p>
      <p className="text-blue-600 font-bold">⭐ {app.ratingAvg}</p>

      <Link to={`/apps/${app.id}`}>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default AppCard;
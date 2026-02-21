import { appsData } from "../data/appsData";
import AppCard from "../components/AppCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Discover Amazing Apps
        </h1>
        <p className="text-gray-600 mb-6">
          Explore top trending applications
        </p>
        <Link to="/apps">
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Explore Apps
          </button>
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-6">Top Apps</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {appsData.slice(0, 8).map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/apps" className="text-blue-600 font-semibold">
          Show All
        </Link>
      </div>

    </div>
  );
}

export default Home;
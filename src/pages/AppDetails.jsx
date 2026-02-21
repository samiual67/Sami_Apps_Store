import { useParams } from "react-router-dom";
import { appsData } from "../data/appsData";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  getInstalledApps,
  saveInstalledApp
} from "../utils/localStorage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function AppDetails() {
  const { id } = useParams();
  const app = appsData.find(a => a.id === parseInt(id));

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getInstalledApps();
    const exists = installedApps.find(item => item.id === app.id);
    if (exists) setInstalled(true);
  }, [app]);

  const handleInstall = () => {
    saveInstalledApp(app);
    setInstalled(true);
    toast.success("App Installed!");
  };

  if (!app) {
    return <p className="p-6">App not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={app.image}
          alt={app.title}
          className="w-full rounded shadow"
        />

        <div>
          <h2 className="text-3xl font-bold mb-2">{app.title}</h2>
          <p className="text-gray-500 mb-2">{app.companyName}</p>
          <p className="mb-2">⭐ {app.ratingAvg}</p>
          <p className="mb-2">Downloads: {app.downloads}</p>
          <p className="mb-4">Reviews: {app.reviews}</p>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded text-white ${
              installed ? "bg-gray-400" : "bg-blue-600"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      <div className="mt-12 bg-white p-6 rounded shadow">
        <h3 className="text-xl font-bold mb-4">
          Rating Distribution
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={app.ratings}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default AppDetails;
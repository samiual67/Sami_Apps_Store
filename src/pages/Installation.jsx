import { useState } from "react";
import toast from "react-hot-toast";
import {
  getInstalledApps,
  removeInstalledApp
} from "../utils/localStorage";

function Installation() {
  const [apps, setApps] = useState(getInstalledApps());

  const handleRemove = (id) => {
    removeInstalledApp(id);
    setApps(getInstalledApps());
    toast.success("App Uninstalled!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h2 className="text-2xl font-bold mb-6">
        Installed Apps
      </h2>

      {apps.length === 0 && (
        <p>No installed apps yet.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {apps.map(app => (
          <div
            key={app.id}
            className="bg-white shadow p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{app.title}</h3>
              <p className="text-sm text-gray-500">
                {app.companyName}
              </p>
            </div>

            <button
              onClick={() => handleRemove(app.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Installation;
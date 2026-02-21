import { useState } from "react";
import { appsData } from "../data/appsData";
import AppCard from "../components/AppCard";

function Apps() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  let filtered = appsData.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "high") {
    filtered = [...filtered].sort((a, b) => b.downloads - a.downloads);
  }

  if (sort === "low") {
    filtered = [...filtered].sort((a, b) => a.downloads - b.downloads);
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h2 className="text-2xl font-bold mb-4">
        Total Apps: {filtered.length}
      </h2>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search app..."
          className="border p-2 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="high">Downloads High → Low</option>
          <option value="low">Downloads Low → High</option>
        </select>
      </div>

      {filtered.length === 0 && (
        <p className="text-red-500">No App Found</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

    </div>
  );
}

export default Apps;
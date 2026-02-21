export const getInstalledApps = () => {
  return JSON.parse(localStorage.getItem("installedApps")) || [];
};

export const saveInstalledApp = (app) => {
  const installed = getInstalledApps();
  const exists = installed.find(item => item.id === app.id);

  if (!exists) {
    localStorage.setItem(
      "installedApps",
      JSON.stringify([...installed, app])
    );
  }
};

export const removeInstalledApp = (id) => {
  const installed = getInstalledApps();
  const updated = installed.filter(app => app.id !== id);
  localStorage.setItem("installedApps", JSON.stringify(updated));
};
export async function getElectionResults() {
  const syncResponse = await fetch("/api/onpe/sync", {
    cache: "no-store",
  });

  if (!syncResponse.ok) {
    throw new Error("No se pudo sincronizar con ONPE");
  }

  const syncData = await syncResponse.json();

  if (syncData.status !== "ok") {
    throw new Error(syncData.message || "Error al sincronizar ONPE");
  }

  return syncData.data;
}
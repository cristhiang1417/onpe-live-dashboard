export async function getElectionResults() {
  const response = await fetch("/api/onpe/sync?t=" + Date.now(), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudo sincronizar con ONPE");
  }

  const json = await response.json();

  if (json.status !== "ok") {
    throw new Error(json.message || "Error al sincronizar ONPE");
  }

  return json.data;
}
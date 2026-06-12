export async function getElectionResults() {
  const response = await fetch("/api/results");

  if (!response.ok) {
    throw new Error("No se pudo obtener resultados");
  }

  return response.json();
}
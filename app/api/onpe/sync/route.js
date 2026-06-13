import { NextResponse } from "next/server";
// import { writeElection } from "../../../lib/writeElection";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function getUrls() {
  const now = Date.now();

  return {
    totalsUrl: `https://resultadosegundavuelta.onpe.gob.pe/presentacion-backend/resumen-general/totales?idEleccion=10&tipoFiltro=eleccion&_=${now}`,
    participantsUrl: `https://resultadosegundavuelta.onpe.gob.pe/presentacion-backend/resumen-general/participantes?idEleccion=10&tipoFiltro=eleccion&_=${now}`,
  };
}

const headers = {
  Accept: "application/json, text/plain, */*",
  "Accept-Language": "es-PE,es;q=0.9,en;q=0.8",
  Referer: "https://resultadosegundavuelta.onpe.gob.pe/main/resumen",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
};

function splitName(fullName) {
  const parts = fullName.split(" ");

  return {
    name: parts.slice(0, 2).join(" "),
    lastname: parts.slice(2).join(" "),
  };
}

async function getJsonFromOnpe(url) {
  const response = await fetch(url, {
    method: "GET",
    headers,
    cache: "no-store",
  });

  const text = await response.text();

  if (text.trim().startsWith("<")) {
    throw new Error(
      `ONPE devolvió HTML. Status: ${response.status}. URL: ${url}`
    );
  }

  return JSON.parse(text);
}

export async function GET() {
  try {
    const { totalsUrl, participantsUrl } = getUrls();

    const [totalsJson, participantsJson] = await Promise.all([
      getJsonFromOnpe(totalsUrl),
      getJsonFromOnpe(participantsUrl),
    ]);

    const totals = totalsJson.data;
    const participants = participantsJson.data;

    const keiko = participants.find((p) =>
      p.nombreCandidato.toUpperCase().includes("KEIKO")
    );

    const roberto = participants.find((p) =>
      p.nombreCandidato.toUpperCase().includes("ROBERTO")
    );

    if (!keiko || !roberto) {
      throw new Error("No se encontraron candidatos en la respuesta ONPE");
    }

    const k = splitName(keiko.nombreCandidato);
    const r = splitName(roberto.nombreCandidato);

    const difference = Math.abs(
      keiko.totalVotosValidos - roberto.totalVotosValidos
    );

    const updatedAt = new Date(
      totals.fechaActualizacion
    ).toLocaleTimeString("es-PE");

    const syncedAt = new Date().toLocaleTimeString("es-PE");

    const electionData = {
      updatedAt,
      syncedAt,
      electionName: "SEGUNDA VUELTA",
      electionYear: "2026",
      progress: totals.actasContabilizadas,

      left: {
        name: k.name,
        lastname: k.lastname,
        percent: keiko.porcentajeVotosValidos,
        votes: keiko.totalVotosValidos,
        color: "#ff7a00",
        party: keiko.nombreAgrupacionPolitica,
      },

      right: {
        name: r.name,
        lastname: r.lastname,
        percent: roberto.porcentajeVotosValidos,
        votes: roberto.totalVotosValidos,
        color: "#00d25b",
        party: roberto.nombreAgrupacionPolitica,
      },

      difference,

      history: [
        {
          time: updatedAt,
          diff: difference,
        },
      ],

      stats: {
        sent: totals.contabilizadas,
        pending: totals.pendientesJee,
        total: totals.totalActas,
      },

      regions: [
        { name: "LIMA", progress: 96.9, left: 63, right: 37 },
        { name: "JUNIN", progress: 99.1, left: 45, right: 55 },
        { name: "LA LIBERTAD", progress: 99.3, left: 58, right: 42 },
        { name: "LAMBAYEQUE", progress: 99.6, left: 59, right: 41 },
      ],
    };

    // En Vercel no se escribe en archivos.
// Solo devolvemos la data en tiempo real.

    return NextResponse.json({
      status: "ok",
      source: "ONPE",
      data: electionData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
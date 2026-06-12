"use client";

import { useState } from "react";
import PeruSVG from "./PeruSVG";
import DepartmentTooltip from "./DepartmentTooltip";
import { peruRegions } from "../data/peruRegions";

export default function PeruMap() {
  const [selected, setSelected] = useState(peruRegions[0]);

  return (
    <section className="mt-8 bg-[#131b30] rounded-3xl p-6 border border-white/5">
      <h2 className="text-xl font-bold mb-6">
        Mapa interactivo del Perú
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 bg-[#0b1020] rounded-3xl p-4">
          <PeruSVG
            regions={peruRegions}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <DepartmentTooltip region={selected} />
      </div>
    </section>
  );
}
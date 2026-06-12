"use client";

export default function LiveUpdates() {
  const events = [
    {
      time: "11:15:02",
      region: "LIMA",
      votes: "+142 votos",
    },
    {
      time: "11:15:07",
      region: "CUSCO",
      votes: "+89 votos",
    },
    {
      time: "11:15:12",
      region: "AREQUIPA",
      votes: "+176 votos",
    },
    {
      time: "11:15:18",
      region: "JUNIN",
      votes: "+121 votos",
    },
  ];

  return (
    <section className="mt-8 bg-[#131b30] rounded-3xl p-6 border border-white/5">
      <h2 className="text-xl font-bold mb-6">
        Actividad en tiempo real
      </h2>

      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#0b1020] rounded-xl p-4 hover:bg-[#18233f] transition-all"
          >
            <div>
              <div className="font-bold">{event.region}</div>
              <div className="text-gray-400 text-sm">
                {event.time}
              </div>
            </div>

            <div className="text-green-400 font-bold">
              {event.votes}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
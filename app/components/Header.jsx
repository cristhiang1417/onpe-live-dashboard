export default function Header({ updatedAt }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-bold">
          🔴 EN VIVO
        </span>

        <h1 className="text-4xl font-bold mt-4">
          SEGUNDA VUELTA
        </h1>

        <p className="text-gray-400">
          Elección Presidencial 2026
        </p>
      </div>

      <div className="text-right">
        <p className="text-gray-400">
          Última actualización
        </p>

        <h2 className="text-2xl font-bold">
          {updatedAt}
        </h2>
      </div>
    </div>
  );
}
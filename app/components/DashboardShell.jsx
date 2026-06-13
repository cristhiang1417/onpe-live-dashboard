export default function DashboardShell({ children }) {
  return (
    <main className="min-h-screen bg-[#080d1c] text-white px-4 py-6 md:px-8 lg:px-10">
      <div className="w-full max-w-[1600px] mx-auto space-y-6">
        {children}
      </div>
    </main>
  );
}
export default function DashboardShell({ children }) {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <div className="mx-auto max-w-[1800px] p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}
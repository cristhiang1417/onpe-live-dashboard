export default function TwoColumnLayout({
  left,
  right,
}) {
  return (
    <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        {left}
      </div>

      <div className="xl:col-span-1">
        {right}
      </div>
    </div>
  );
}
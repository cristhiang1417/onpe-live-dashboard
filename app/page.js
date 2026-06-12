import MainDashboard from "./components/MainDashboard";
import { ElectionProvider } from "./context/ElectionContext";

export default function Home() {
  return (
    <ElectionProvider>
      <MainDashboard />
    </ElectionProvider>
  );
}
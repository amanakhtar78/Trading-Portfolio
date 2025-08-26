import PortfolioTable from "../components/PortfolioTable";
import PortfolioChart from "../components/PortfolioChart";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">📊 Portfolio Dashboard</h1>
      <PortfolioTable />
      <PortfolioChart />
    </main>
  );
}

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 border">
        <Topbar />
        <main className="flex-1 p-3">{children}</main>
      </div>
    </div>
  );
}

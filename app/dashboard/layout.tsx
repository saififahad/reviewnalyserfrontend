import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-3">{children}</main>
      </div>
    </div>
  );
}

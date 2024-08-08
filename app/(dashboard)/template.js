import Sidebar from "@/components/sidebar";

export default function DashboardTemplate({ children }) {
    return (
      <html lang="en">
        <body >
            <div className="flex">
                <Sidebar />
                <div className="flex-1 ">
                    {children}
                </div>
            </div>
        </body>
      </html>
    );
  }
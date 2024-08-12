import Navbar from "@/components/mobilenav";
import Sidebar, { BottomBar } from "@/components/sidebar";

export default function DashboardTemplate({ children }) {
    return (
      <html lang="en">
        <body >
          <Navbar />
            <div className="flex pt-16 md:pt-0">
                <Sidebar />
                <BottomBar />
                <div className="flex-1 ">
                    {children}
                </div>
            </div>
        </body>
      </html>
    );
  }
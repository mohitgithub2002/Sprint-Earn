import Navbar from "@/components/mobilenav";
import Sidebar, { BottomBar } from "@/components/sidebar";

export default async function DashboardTemplate({ children }) {
    return (
      <html lang="en">
        <body >
          <Navbar />
            <div className="flex pt-20 bg-white md:pt-0">
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
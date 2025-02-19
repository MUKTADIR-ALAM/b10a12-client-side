import React, { useEffect } from "react";
import NavigationBar from "../Shared/Navigation/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { IStaticMethods } from "flyonui/flyonui";

// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }

export default function MainLayout() {

  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      try {
        await import('flyonui/flyonui'); 
        window.HSStaticMethods?.autoInit(); 
      } catch (error) {
        console.error('Error loading FlyonUI:', error);
      }
    };

    loadFlyonui();
  }, [location.pathname]);


  return (
    <div>
      {/* <div className="w-11/12 mx-auto"> */}
        <NavigationBar />
      {/* </div> */}
      <div className="w-11/12 mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

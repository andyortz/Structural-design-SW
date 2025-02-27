import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Losa from "../../pages/Losa";
const Navbar = () => {
  const [showStartUp, setShowStartUp] = useState(true);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setShowStartUp(location.pathname === '/');
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleSharesClick = (path) => {
    setShowStartUp(false);
    setActiveLink(path)
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[90px] px-4 py-3 bg-customBlue text-white font-secular font-light text-xl">
        <div className="flex">
          <span className="cursor-pointer">Sctructural Calculator</span>
        </div>
        <ul className="flex space-x-32 mr-28">
          <li onClick={() => handleSharesClick("Losa")}>
            <Link to={"Losa"} className={`hover:text-customHover ${activeLink === "/Losa" || activeLink === "/" ? "text-customHover": ""}`}>
              Losa
            </Link>
          </li>
          <li onClick={() => handleSharesClick("Carga")}>
            <Link to={"Carga"} className={`hover:text-customHover ${activeLink === "/Carga"? "text-customHover": ""}`}>
              Cargas
            </Link>
          </li>

          <li>
            Vigas
          </li>
          <li>
            Paredes
          </li>
          <li>
            Columnas
          </li>
          {/* <li onClick={() => handleSharesClick("Users")}>
            <Link to={"Users"} className={`hover:text-customHover ${activeLink === "/Users"? "text-customHover": ""}`}>
              Users
            </Link>
          </li> */}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
      {showStartUp && <Losa />}
    </>
  );
};

export default Navbar;
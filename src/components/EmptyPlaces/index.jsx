import React from "react";
import "./style.css";

import { Outlet, useNavigate, useOutlet } from "react-router-dom";

const EmptyPlaces = () => {
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  return (
    <>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <div className="wrapper">
          <div
            className="card"
            onClick={() => navigate("/empty-class/ordinary-rooms")}
          >
            Ordenary Rooms
          </div>
          <div className="card" onClick={() => navigate("/empty-class/luxury")}>
            Luxury Rooms
          </div>
          <div
            className="card"
            onClick={() => navigate("/empty-class/cottages")}
          >
            Cottages
          </div>
        </div>
      )}
    </>
  );
};

export default EmptyPlaces;

import React from "react";

import { Outlet, useNavigate, useOutlet } from "react-router-dom";

const OrdinaryRooms = () => {
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
            onClick={() => navigate("/empty-class/ordinary-rooms/2")}
          >
            2 Building
          </div>
          <div
            className="card"
            onClick={() => navigate("/empty-class/ordinary-rooms/4")}
          >
            4 Building
          </div>
        </div>
      )}
    </>
  );
};

export default OrdinaryRooms;

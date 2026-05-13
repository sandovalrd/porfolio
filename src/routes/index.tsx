import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./config";
import moment from "moment";

const Router = () => {
  moment.locale("en"); // default languaje
  return (
    <div className="bg-gray-100">
      <Routes>
        {routes.map((routeItem, idx) => {
          return (
            <Route
              key={idx}
              path={routeItem.path}
              element={<routeItem.component />}
            />
          );
        })}
        <Route path={"/"} element={<Navigate to="/profile" replace />} />
      </Routes>
    </div>
  );
};

export default Router;

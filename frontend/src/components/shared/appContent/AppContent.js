import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../../../utils/routes";

const AppContent = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Suspense fallback={<Spinner />}>
        <Routes>
          {routes.map((route, id) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={route.element}
            />
          ))}
          {/* Redirect to unauthorized page if route not found */}
          <Route path="*" element={<Navigate to="/unauthorized" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppContent;

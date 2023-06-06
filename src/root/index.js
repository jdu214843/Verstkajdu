import React from "react";
import { Route, Routes } from "react-router-dom";
import { data } from "../utils/mock";

const Root = () => {
  return (
    <Routes>
      {data.map(({ id, path, Component, child, children }) => {
        return child ? (
          <Route exact key={id} path={path} element={Component}>
            {children.map(({ id, path, Component, child, children }) => {
              return child ? (
                <Route key={id} path={path} element={Component}>
                  {children.map(({ id, path, Component }) => (
                    <Route key={id} path={path} element={Component} />
                  ))}
                  ;
                </Route>
              ) : (
                <Route key={id} path={path} element={Component} />
              );
            })}
          </Route>
        ) : (
          <Route exact key={id} path={path} element={Component} />
        );
      })}
    </Routes>
  );
};

export default Root;

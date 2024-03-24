import React, { lazy } from "react";

const Unauthorized = lazy(() => import("../pages/Unauth"));
const AddUser = lazy(() => import("../view/AddUser"));
const UserProfile = lazy(() => import("../view/UserProfile"));
const Users = lazy(() => import("../view/Users"));

export const routes = [
  {
    path: "/employee/add",
    element: <AddUser />,
  },
  {
    path: "/employee/edit/:id",
    element: <UserProfile />,
  },
  {
    path: "/about",
    element: <Unauthorized />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/employee/list",
    element: <Users />,
  },
  {
    path: "/",
    element: <Users />,
  },
];

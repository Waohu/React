import React from "react";
import ProfilePage from "./pages/users/ProfilePage";
import HomePage  from "./pages/users/HomePage"; // Chỉnh sửa đường dẫn
import { ROUTERS } from "./utils/router";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "./pages/users/theme/MasterLayout";
import Store from "./pages/users/Store";
import Meo from "./pages/users/Store/Meo";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE, 
      component: <ProfilePage />, // Sử dụng biến ProfilePage đã import
    },
    {
      path: ROUTERS.USER.STORE, 
      component: < Store />, 
    },
    {
      path: ROUTERS.USER.DOPHASAN, 
      component: < Store />, 
    },
    {
      path: ROUTERS.USER.MEO, 
      component: < Meo />, 
    },
  ];
  
  return (
    < MasterLayout > 
    <Routes>
      {userRouters.map ((item, key) => (
        <Route key={key} path={item.path} element={item.component} />
      ))}
    </Routes>
    </MasterLayout >
  );
};

const RouterCustom = () => {
  return renderUserRouter();  
};

export default RouterCustom;

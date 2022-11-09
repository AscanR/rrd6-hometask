import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import SwitchNavbarLinksProvider from "./hooks/SwitchNavbarLinks";
import Navbar from "./components/navbars/Navbar";
import UserCard from "./components/UserCard";
import UserEditPage from "./components/UserEditPage";
import UsersList from "./components/UsersList";
import {usersInfo} from "./utils/usersInfo";
import Users from "./components/pages/Users";

const App = () => {
    return (
          <>
              <SwitchNavbarLinksProvider>
                  <Navbar/>
                  <Routes>
                      <Route index element={<MainPage/>}/>
                      <Route path='users' element={<Users/>}>
                          <Route index element={<UsersList users={usersInfo}/>}/>
                          <Route path=':userId' element={<UserCard/>}/>
                          <Route path=':userId/edit' element={<UserEditPage/>}/>
                          <Route path='*' element={<Navigate to='/users'/>}/>
                          <Route path='*' element={<Navigate to='/'/>}/>
                      </Route>
                      <Route path='*' element={<Navigate to='/'/>}/>
                  </Routes>
              </SwitchNavbarLinksProvider>
          </>
    );
};

export default App;


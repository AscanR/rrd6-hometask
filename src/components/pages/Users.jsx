import React from 'react';
import {useParams,Outlet} from "react-router-dom";
import UserCard from "../UserCard";
import UsersList from "../UsersList";
import {usersInfo} from "../../utils/usersInfo";
import UserEditPage from "../UserEditPage";

const Users = () => {
    const {userId, edit} = useParams();
    return (
          <>
              <Outlet/>
              {/*{userId ?*/}
              {/*      (edit*/}
              {/*                  ? <UserEditPage/>*/}
              {/*                  : <UserCard/>*/}
              {/*      )*/}
              {/*      : <UsersList users={usersInfo}/>}*/}
          </>
    );
};

export default Users;
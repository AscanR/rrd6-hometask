import React from 'react';
import UserItem from "./UserItem";

const UsersList = ({users}) => {
    return (
          <>
              {users.map(user => <UserItem key={user.id} user={user}/>)}
          </>

    );
};

export default UsersList;
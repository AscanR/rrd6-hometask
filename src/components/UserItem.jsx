import React from 'react';
import {Link} from "react-router-dom";

const UserItem = ({user}) => {
    return (
          <div className='m-2'>
              <Link className='m-2' to={`/users/${user.id}`}>
                  {`${user.id}. ${user.name}`}
              </Link>
          </div>
    );
};

export default UserItem;
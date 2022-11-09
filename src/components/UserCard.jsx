import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const UserCard = () => {
    const navigate = useNavigate()
    const {userId} = useParams()
    const handleClick = () => {
        navigate('edit');
    };
    return (
          <>
              <div className='m-3'>
                  {`UserID: ${userId}`}
              </div>
              <div className='flex-column'>
                  <button className='btn btn-secondary m-2' onClick={() => navigate('users')}>Users List</button>
                  <button className='btn btn-warning m-2' onClick={handleClick}>Edit User</button>
              </div>
          </>
    );
};

export default UserCard;
import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const UserEditPage = () => {
    const {userId} = useParams()
    const navigate = useNavigate()

    return (
          <>
              <div className='m-3'>
                  {`EditUserPage. UserID - ${userId}`}
              </div>
              <div className='flex-column'>
                  <button className='btn btn-secondary m-2' onClick={() => navigate('users')}>Users List</button>
                  <button className='btn btn-success m-2' onClick={() => navigate(`/users/${Number(userId) + 1}`)}>Another User</button>
                  <button className='btn btn-primary m-2' onClick={() => navigate(`/users/${userId}`)}>User profile page</button>
              </div>
          </>
    );
};

export default UserEditPage;
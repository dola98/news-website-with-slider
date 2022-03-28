import React from 'react';
import AddNews from './addNews/AddNews';
import IsAdmin from './isAdmin/IsAdmin';

const Admin = () => {
    return (
        <div>
            <IsAdmin>
                <AddNews/>
            </IsAdmin>
        </div>
    );
};

export default Admin;
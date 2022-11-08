import React from 'react';
import { Outlet } from 'react-router-dom';
import SharedFooter from '../Shared/Footer/SharedFooter';

import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <SharedFooter></SharedFooter>
        </div>
    );
};

export default Main;
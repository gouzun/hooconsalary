

import AddEditSalary from '../../component/addeditSalary/addeditsalary.component';
import { useContext, useState } from 'react';
import ViewSalary from '../../component/viewsalary/viewsalary.component';
import MenuButtonOnly from '../../component/menubuttononly/menubuttononly';


const Home = () => {
    const menuTitleViewSheet = {
        "title": "Monthly Summary",
    };

    const menuTitleAddEditSheet = {
        "title": "Add/Edit Sheet",
    };


    const [addEditFormVisible, setAddEditFormVisible] = useState(false);
    const [viewFormVisible, setViewFormVisible] = useState(true);



    const openAddEditForm = () => {

        setAddEditFormVisible(true);
        setViewFormVisible(false);

    }

    const openViewForm = () => {
        setAddEditFormVisible(false);
        setViewFormVisible(true);
    }

    return (
        <>
            <div className="w-full h-14 items-center grid grid-flow-col auto-cols-max gap-4 justify-center drop-shadow-lg" >
                <div onClick={openViewForm}><MenuButtonOnly menuTitle={menuTitleViewSheet} /></div>
                <div onClick={openAddEditForm}><MenuButtonOnly menuTitle={menuTitleAddEditSheet} /></div>
            </div>
            {addEditFormVisible && (<AddEditSalary />)}
            {viewFormVisible && (<ViewSalary />)}
        </>
    );
};
export default Home;
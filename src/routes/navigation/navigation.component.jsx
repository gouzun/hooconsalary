import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import pic from '../../assets/72x72.png';
import { ProjectListContext } from '../../context/projectlist.context';


const Navigation = () => {
    const { setSearchProject, setSearchMth, setSearchYear, setSearchWorker, setSearchRate } = useContext(ProjectListContext);

    const init = () => {
        setSearchProject('');
        setSearchMth('');
        setSearchYear('');
        setSearchWorker('');
        setSearchRate(0);
    }


    return (
        <Fragment>
            <div className="flex flex-row text-gray-700 font-bold text-xs uppercase w-full h-14 items-center gap-4 bg-gradient-to-r from-blue-100 to-cyan-800 drop-shadow-lg shadow-lg">
                <Link className='basis-20 logo-container' to='/'><img className='w-14 h-10 pl-4' src={pic} alt='' /></Link>
                <Link className='basis-auto hover:text-blue-600 pr-3' to='/'>Salary Summary</Link>
                <Link className='basis-auto hover:text-blue-600 pr-3' to='/addeditsalary' onClick={init}>Add/Edit Salary Sheet</Link>
                <Link className='basis-auto hover:text-blue-600 pr-3' to='/addproject' onClick={init}>Add Project</Link>
                <Link className='basis-auto hover:text-blue-600 pr-3' to='/addworker' onClick={init}>Add Worker</Link>
                
            </div>
            <Outlet />
        </Fragment>

    );
};

export default Navigation;
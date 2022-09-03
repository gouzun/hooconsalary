import ProjectDd from '../../component/projectdd/projectdd.component';
import MonthDd from '../../component/monthdd/monthdd.component';
import YearDd from '../../component/yeardd/yeardd.component';
import SalaryGrid from '../../component/salarygrid/salarygrid.component';
import PageTitle from '../../component/pagetitle/pagetitle.component';
import Footer from '../../component/footer/footer.component';

import { ProjectListContext } from '../../context/projectlist.context';
import { useContext } from 'react';
import { generateProjectList, generateWorkerList } from '../../utils/firebase/firebase.utils';


const ViewSalary = () => {
    const { setProjectList, setWorkerList } = useContext(ProjectListContext);

    const titleObject = {
        titlename: "View Monthly Summary",
    }


    const generateProjectListHandler = async () => {
        const projectObj = await generateProjectList();
        let arrProject = [];
        projectObj.forEach((project)=>{
            
            arrProject.push(project.projectname);
        })
        setProjectList(arrProject);

        const workerList = await generateWorkerList();
        setWorkerList(workerList);
    }

    return (
        <>
            <div id="formSalarySheet" className='w-full items-center' onLoad={generateProjectListHandler}>
                <div className='h-5'></div>
                <PageTitle titleObject={titleObject} />
                <div className='h-5'></div>
                <div className='flex flex-wrap justify-center' >
                    <ProjectDd />
                    <div className='h-5'></div>
                    <MonthDd />
                    <div className='h-5'></div>
                    <YearDd />
                </div>
                <div className='h-5'></div>
                <SalaryGrid />
                <div className='h-5'></div>
                <Footer />
            </div>
        </>
    )
        ;
}
export default ViewSalary;
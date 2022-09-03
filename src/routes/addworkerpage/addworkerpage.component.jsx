import PageTitle
 from "../../component/pagetitle/pagetitle.component";

import AddWScope from "../../component/int-input/addwscope.component";
import AddWName from "../../component/int-input/addwname.component";
import Footer from "../../component/footer/footer.component";

import ViewWorker from "../../component/viewworker/viewworker.component";
import ProjectDd from "../../component/projectdd/projectdd.component";

const AddWorkerPage = () => {
    
    const titleObject = {
        titlename: "Worker List",
    }
   
    return (
        <>
            <div className='w-full items-center'>
                <div className='h-5'></div>
                <PageTitle titleObject={titleObject} />
                <div className='h-5'></div>
                <div className='flex flex-wrap justify-center' >
                    <AddWName titleObject={{titlename:"Add New Worker Name"}}/>
                    <div className='h-5'></div>
                    <ProjectDd titleObject={{titlename:"Add Project "}}/>
                    <div className='h-5'></div>
                    <AddWScope titleObject={{titlename:"Add Work Scope"}}/>
                </div>
                <div className='h-5'></div>
                <ViewWorker />
                <div className='h-5'></div>
                <Footer />
            </div>
        </>
    )
        ;
}

export default AddWorkerPage;
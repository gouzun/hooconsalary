import PageTitle
 from "../../component/pagetitle/pagetitle.component";
import AddLocation
 from "../../component/int-input/addlocation.component";
import AddMainCon from "../../component/int-input/addmaincon.component";
import AddProject from "../../component/int-input/addproject.component";
import Footer from "../../component/footer/footer.component";
import { ProjectListContext } from "../../context/projectlist.context";
import { useContext } from "react";
import ViewProject from "../../component/viewproject/viewproject.component";

const AddProjectPage = () => {
    const titleObject = {
        titlename: "Project List",
    }
   
    return (
        <>
            <div className='w-full items-center'>
                <div className='h-5'></div>
                <PageTitle titleObject={titleObject} />
                <div className='h-5'></div>
                <div className='flex flex-wrap justify-center' >
                    <AddProject titleObject={{titlename:"Add New Project"}}/>
                    <div className='h-5'></div>
                    <AddLocation titleObject={{titlename:"Add Project Location"}}/>
                    <div className='h-5'></div>
                    <AddMainCon titleObject={{titlename:"Add Main Con"}}/>
                </div>
                <div className='h-5'></div>
                <ViewProject />
                <div className='h-5'></div>
                <Footer />
            </div>
        </>
    )
        ;
}

export default AddProjectPage;
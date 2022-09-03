import PageTitle from "../pagetitle/pagetitle.component";
import AddEditGrid from "../addeditgrid/addeditgrid.component";
import Footer from "../footer/footer.component";


const AddEditSalary = () => {

    const titleObject = {
        titlename: "Add/Edit Salary Sheet"
    }

    return (
        <div id="formSalarySheet" className='w-full items-center'>
            <div className='h-5'></div>
            <PageTitle titleObject={titleObject} />
            <div className='h-5'></div>
            <AddEditGrid />
            <div className='h-5'></div>
            <Footer />
        </div>
    );
}

export default AddEditSalary;
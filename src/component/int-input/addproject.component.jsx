import { Input } from "@material-tailwind/react";
import { ProjectListContext } from "../../context/projectlist.context";
import { useContext } from "react";

const AddProject = ({ titleObject }) => {

    const { titlename } = titleObject;

    const { addProject, setAddProject } = useContext(ProjectListContext);


    const handleChange = (event) => {
        
        setAddProject(event.target.value);

    };

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Input id={titlename} label={titlename} value={addProject} onChange={handleChange} />
    </div>
    );

}

export default AddProject;
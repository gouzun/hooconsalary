import { Select, Option } from "@material-tailwind/react";
import { ProjectListContext } from '../../context/projectlist.context.jsx'
import { useContext } from 'react';

const ProjectDd = () => {

    const { projectList, setSearchProject } = useContext(ProjectListContext);

    const handleChange = (value) => {
        setSearchProject(value);
    }

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Select label="Select Project [*required]" onChange={handleChange} >
            {projectList.map((item) => (<Option key={item} value={item}>{item}</Option>))}
        </Select>
    </div>);

}
export default ProjectDd;
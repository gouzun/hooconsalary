import { Select, Option } from "@material-tailwind/react";
import { ProjectListContext } from '../../context/projectlist.context.jsx'
import { useContext } from 'react';

const WorkerDd = () => {

    const { workerList, setSearchWorker } = useContext(ProjectListContext);

    const handleChange = (value) => {
        setSearchWorker(value);
    }

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Select label="Select Worker [*required]" onChange={handleChange} >
            {workerList.map((item) => (<Option key={item} value={item}>{item}</Option>))}
        </Select>
    </div>);
}

export default WorkerDd;
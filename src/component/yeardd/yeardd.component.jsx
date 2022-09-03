import { Select, Option } from "@material-tailwind/react";
import { ProjectListContext } from '../../context/projectlist.context'
import { useContext } from "react";
const YearDd = () => {

    const { searchYear, setSearchYear } = useContext(ProjectListContext);
    const arrYr = ['2022', '2023']
    const handleChange = (value) => {
        setSearchYear(value);
    }

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Select label="Select Year [*required]" value={searchYear} onChange={handleChange} >
            {arrYr.map((item) => (<Option key={item} value={item}>{item}</Option>))}
        </Select>
    </div>);


}
export default YearDd;
import { Select, Option } from "@material-tailwind/react";
import { ProjectListContext } from '../../context/projectlist.context'
import { useContext } from "react";
const MonthDd = () => {

    const { searchMth, setSearchMth } = useContext(ProjectListContext);
    const arrMth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const handleChange = (value) => {
        setSearchMth(value);
    }

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Select label="Select Month [*required]" value={searchMth} onChange={handleChange} >
            {arrMth.map((item) => (<Option key={item} value={item}>{item}</Option>))}
        </Select>
    </div>);


}

export default MonthDd;
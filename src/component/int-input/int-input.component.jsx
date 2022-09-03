import { Input } from "@material-tailwind/react"
import {  useState, useEffect, useContext } from 'react';
import { ProjectListContext } from "../../context/projectlist.context";

const IntInput = ({ titleObj }) => {

    const { titlename } = titleObj[0];
    const { dataValue } = titleObj[1];
    const{setSearchRate} = useContext(ProjectListContext);

    const [value, setValue] = useState(dataValue);
    useEffect(() => setValue(dataValue), [dataValue])


    const handleChange = (event) => {

        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
        setSearchRate(result);
    };



    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Input id={titlename} label={titlename} value={value} onChange={handleChange} />
    </div>

    )
}

export default IntInput;
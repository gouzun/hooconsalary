import { Input } from "@material-tailwind/react";
import { ProjectListContext } from "../../context/projectlist.context";
import { useContext } from "react";

const D3Input = ({ titleObject }) => {

    const { titlename } = titleObject;

    const { d3, setD3 } = useContext(ProjectListContext);


    const handleChange = (event) => {
        const result = event.target.value.replace(/\D/g, '');
        setD3(result);

    };

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Input id={titlename} label={titlename} value={d3} onChange={handleChange} />
    </div>
    );

}

export default D3Input;
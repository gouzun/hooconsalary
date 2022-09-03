import { Input } from "@material-tailwind/react";
import { ProjectListContext } from "../../context/projectlist.context";
import { useContext } from "react";

const D2Input = ({ titleObject }) => {

    const { titlename } = titleObject;

    const { d2, setD2 } = useContext(ProjectListContext);


    const handleChange = (event) => {
        const result = event.target.value.replace(/\D/g, '');
        setD2(result);

    };

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Input id={titlename} label={titlename} value={d2} onChange={handleChange} />
    </div>
    );

}

export default D2Input;
import { Input } from "@material-tailwind/react";
import { ProjectListContext } from "../../context/projectlist.context";
import { useContext } from "react";

const AddMainCon = ({ titleObject }) => {

    const { titlename } = titleObject;
    const { addMainCon, setAddMainCon } = useContext(ProjectListContext);

    const handleChange = (event) => {
        setAddMainCon(event.target.value);

    };

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Input id={titlename} label={titlename} value={addMainCon} onChange={handleChange} />
    </div>
    );

}

export default AddMainCon;
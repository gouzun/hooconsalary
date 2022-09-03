import { Input } from "@material-tailwind/react";
import { ProjectListContext } from "../../context/projectlist.context";
import { useContext } from "react";

const AddWName = ({ titleObject }) => {

    const { titlename } = titleObject;

    const { addWName, setAddWName } = useContext(ProjectListContext);


    const handleChange = (event) => {
        
        setAddWName(event.target.value);

    };

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Input id={titlename} label={titlename} value={addWName} onChange={handleChange} />
    </div>
    );

}

export default AddWName;
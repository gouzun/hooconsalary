import { Input } from "@material-tailwind/react";
import { ProjectListContext } from "../../context/projectlist.context";
import { useContext } from "react";

const AddLocation = ({ titleObject }) => {

    const { titlename } = titleObject;

    const { addLocation, setAddLocation } = useContext(ProjectListContext);


    const handleChange = (event) => {
        setAddLocation(event.target.value);

    };

    return (<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
        <Input id={titlename} label={titlename} value={addLocation} onChange={handleChange} />
    </div>
    );

}

export default AddLocation;
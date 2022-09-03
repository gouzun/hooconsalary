import { Input } from "@material-tailwind/react";
import { ProjectListContext } from "../../context/projectlist.context";
import { useContext,useEffect,useState } from "react";

const RateInput = ({titleObject})=>{

    const {titlename} = titleObject;
    
    const{searchRate,setSearchRate} = useContext(ProjectListContext);

       
    const handleChange = (event) => {
        const result = event.target.value.replace(/\D/g, '');      
        setSearchRate(result);
      
    };

    return(<div className="flex-wrap justify-center px-10 py-2 w-80 items-end gap-4">
    <Input id={titlename} label={titlename} value={searchRate} onChange={handleChange} />
        </div>
        );

}

export default RateInput;
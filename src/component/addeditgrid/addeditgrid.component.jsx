import { ProjectListContext } from '../../context/projectlist.context';
import { useContext, useState,  } from 'react';
import { generateWorkerSheet } from '../../utils/firebase/firebase.utils';
import { Button } from "@material-tailwind/react";

import ProjectDd from "../projectdd/projectdd.component";
import MonthDd from "../monthdd/monthdd.component";
import YearDd from "../yeardd/yeardd.component";
import WorkerDd from "../workerdd/workerdd.component";
import { addNewFBSalary } from "../../utils/firebase/firebase.utils";
import RateInput from '../int-input/rateinput.component';
import D31Input from '../int-input/d31input.component';
import D1Input from '../int-input/d1input.component';
import D2Input from '../int-input/d2input.component';
import D3Input from '../int-input/d3input.component';
import D4Input from '../int-input/d4input.component';
import D5Input from '../int-input/d5input.component';
import D6Input from '../int-input/d6input.component';
import D7Input from '../int-input/d7input.component';
import D8Input from '../int-input/d8input.component';
import D9Input from '../int-input/d9input.component';
import D10Input from '../int-input/d10input.component';
import D11Input from '../int-input/d11input.component';
import D12Input from '../int-input/d12input.component';
import D13Input from '../int-input/d13input.component';
import D14Input from '../int-input/d14input.component';
import D15Input from '../int-input/d15input.component';
import D16Input from '../int-input/d16input.component';
import D17Input from '../int-input/d17input.component';
import D18Input from '../int-input/d18input.component';
import D19Input from '../int-input/d19input.component';
import D20Input from '../int-input/d20input.component';
import D21Input from '../int-input/d21input.component';
import D22Input from '../int-input/d22input.component';
import D23Input from '../int-input/d23input.component';
import D24Input from '../int-input/d24input.component';
import D25Input from '../int-input/d25input.component';
import D26Input from '../int-input/d26input.component';
import D27Input from '../int-input/d27input.component';
import D28Input from '../int-input/d28input.component';
import D29Input from '../int-input/d29input.component';
import D30Input from '../int-input/d30input.component';



const AddEditGrid = () => {

    const { searchProject, searchMth, searchYear, searchWorker, searchRate, setSearchRate, d31, setD31, d30, setD30, d29, setD29, d28, setD28, d1, setD1, d2, setD2, d3, setD3, d4, setD4, d5, setD5, d6, setD6, d7, setD7, d8, setD8, d9, setD9, d10, setD10, d11, setD11, d12, setD12, d13, setD13, d14, setD14, d15, setD15, d16, setD16, d17, setD17, d18, setD18, d19, setD19, d20, setD20, d21, setD21, d22, setD22, d23, setD23, d24, setD24, d25, setD25, d26, setD26, d27, setD27 } = useContext(ProjectListContext);
    const [rowCount, setRowCount] = useState(0);
    const [isLoading, setIsLoading] = useState(null);
   
    
    const saveEditHandler = async () => {

        // const rate = document.getElementById('Key in rate');

        //to check if it is a valid date
        let tempDate = searchYear + '-' + searchMth + '-31'

        if (Object.prototype.toString.call(tempDate) === '[object Date]') {
        } else {
            setD31(0);
        }

        tempDate = searchYear + '-' + searchMth + '-30'

        if (Object.prototype.toString.call(tempDate) === '[object Date]') {
        } else {
            setD30(0);
        }

        tempDate = searchYear + '-' + searchMth + '-29'
        if (Object.prototype.toString.call(tempDate) === '[object Date]') {
        } else {
            setD29(0);
        }

        setIsLoading(<div className='flex justify-center text-sm py-2 h-5 text-red-700'>Record updating...</div>);

        if (!(searchWorker && searchProject && searchMth && searchYear)) {
            setIsLoading(<div className='flex justify-center items-center text-sm py-2 h-5 text-red-900 bg-red-100'>Please select worker name, project, month and year.</div>);
        } else {

            await addNewFBSalary(searchWorker, searchProject, searchRate, searchMth, searchYear, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30, d31)
                .then(
                    setIsLoading(<div className='flex justify-center items-center text-sm py-2 h-5 text-green-700 bg-green-100'>Record Added/Updated.</div>)
                )
        }

    };

    const initializeState = () => {
        setSearchRate(0);
        setD1(0);
        setD2(0);
        setD3(0);
        setD4(0);
        setD5(0);
        setD6(0);
        setD7(0);
        setD8(0);
        setD9(0);
        setD10(0);
        setD11(0);
        setD12(0);
        setD13(0);
        setD14(0);
        setD15(0);
        setD16(0);
        setD17(0);
        setD18(0);
        setD19(0);
        setD20(0);
        setD21(0);
        setD22(0);
        setD23(0);
        setD24(0);
        setD25(0);
        setD26(0);
        setD27(0);
        setD28(0);
        setD29(0);
        setD30(0);
        setD31(0);
    }


    const searchHandler = async () => {

        setIsLoading(<div className='flex justify-center items-center text-sm py-3 h-5 text-red-600 bg-red-100'>Searching...</div>);

        const result = await generateWorkerSheet(searchWorker, searchProject, searchMth, searchYear);
       
        initializeState();

        if (result.length > 0) {
            setSearchRate(result[result.length - 1]);
            setD1(result[0]);
            setD2(result[1]);
            setD3(result[2]);
            setD4(result[3]);
            setD5(result[4]);
            setD6(result[5]);
            setD7(result[6]);
            setD8(result[7]);
            setD9(result[8]);
            setD10(result[9]);
            setD11(result[10]);
            setD12(result[11]);
            setD13(result[12]);
            setD14(result[13]);
            setD15(result[14]);
            setD16(result[15]);
            setD17(result[16]);
            setD18(result[17]);
            setD19(result[18]);
            setD20(result[19]);
            setD21(result[20]);
            setD22(result[21]);
            setD23(result[22]);
            setD24(result[23]);
            setD25(result[24]);
            setD26(result[25]);
            setD27(result[26]);
            setD28(result[27]);
            setD29(result[28]);
            setD30(result[29]);
            setD31(result[30]);
        }

        setRowCount(result.length > 0 ? 1 : 0);
        setIsLoading(<div className='flex justify-center items-center text-sm py-3 h-5 text-green-700 bg-green-100' >Search Completed.</div>);
        // setArrResult(result);


    }

    return (<div className="overflow-x-auto shadow-lg sm:rounded-lg" >
        <div className='flex flex-wrap justify-center'>
            <WorkerDd />
            <div className='h-5'></div>
            <RateInput titleObject={{ titlename: "Key in rate" }} />
            <div className='h-5'></div>
            <ProjectDd />
            <div className='h-5'></div>
            <MonthDd />
            <div className='h-5'></div>
            <YearDd />
        </div>

        <div className="flex justify-center pb-2"><Button className='w-60 bg-gradient-to-r from-green-300 to-green-100 text-gray-700 hover:text-gray-900 drop-shadow-lg' onClick={saveEditHandler}>ADD NEW/SAVE CHANGES</Button></div>
        <div className="flex justify-center pb-2"><Button className='w-60 bg-gradient-to-r from-cyan-300 to-blue-200 text-gray-700 hover:text-gray-900 drop-shadow-lg' onClick={searchHandler}>SEARCH</Button></div>
        {isLoading}
        <div className='flex justify-center text-sm py-2 h-10 font-semibold '>Record(s) found : {rowCount}</div>
        <div className='flex flex-wrap justify-center'>
            <D1Input titleObject={{ titlename: "D1" }} />
            <D2Input titleObject={{ titlename: "D2" }} />
            <D3Input titleObject={{ titlename: "D3" }} />
            <D4Input titleObject={{ titlename: "D4" }} />
            <D5Input titleObject={{ titlename: "D5" }} />
            <D6Input titleObject={{ titlename: "D6" }} />
            <D7Input titleObject={{ titlename: "D7" }} />
            <D8Input titleObject={{ titlename: "D8" }} />
            <D9Input titleObject={{ titlename: "D9" }} />
            <D10Input titleObject={{ titlename: "D10" }} />
            <D11Input titleObject={{ titlename: "D11" }} />
            <D12Input titleObject={{ titlename: "D12" }} />
            <D13Input titleObject={{ titlename: "D13" }} />
            <D14Input titleObject={{ titlename: "D14" }} />
            <D15Input titleObject={{ titlename: "D15" }} />
            <D16Input titleObject={{ titlename: "D16" }} />
            <D17Input titleObject={{ titlename: "D17" }} />
            <D18Input titleObject={{ titlename: "D18" }} />
            <D19Input titleObject={{ titlename: "D19" }} />
            <D20Input titleObject={{ titlename: "D20" }} />
            <D21Input titleObject={{ titlename: "D21" }} />
            <D22Input titleObject={{ titlename: "D22" }} />
            <D23Input titleObject={{ titlename: "D23" }} />
            <D24Input titleObject={{ titlename: "D24" }} />
            <D25Input titleObject={{ titlename: "D25" }} />
            <D26Input titleObject={{ titlename: "D26" }} />
            <D27Input titleObject={{ titlename: "D27" }} />
            <D28Input titleObject={{ titlename: "D28" }} />
            <D29Input titleObject={{ titlename: "D29" }} />
            <D30Input titleObject={{ titlename: "D30" }} />
            <D31Input titleObject={{ titlename: "D31" }} />
        </div>
    </div>);


}
export default AddEditGrid;
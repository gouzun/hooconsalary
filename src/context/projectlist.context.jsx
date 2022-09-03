
import { createContext, useState, useEffect } from "react";


export const ProjectListContext = createContext({
    projectList: [],
    setProjectList: () => { },
    searchProject: '',
    setSearchProject: () => { },
    searchMth: '',
    setSearchMth: () => { },
    searchYear: '',
    setSearchYear: () => { },
    workerList: [],
    setWorkerList: () => { },
    searchWorker: '',
    setSearchWorker: () => { },
    searchRate: 0,
    setSearchRate: () => { },
    d31: 0,
    setD31: () => { },
    d30: 0,
    setD30: () => { },
    d29: 0,
    setD29: () => { },
    d28: 0,
    setD28: () => { },
    d27: 0,
    setD27: () => { },
    d26: 0,
    setD26: () => { },
    d25: 0,
    setD25: () => { },
    d24: 0,
    setD24: () => { },
    d23: 0,
    setD23: () => { },
    d22: 0,
    setD22: () => { },
    d21: 0,
    setD21: () => { },
    d20: 0,
    setD20: () => { },
    d1: 0,
    setD1: () => { },
    d2: 0,
    setD2: () => { },
    d3: 0,
    setD3: () => { },
    d4: 0,
    setD4: () => { },
    d5: 0,
    setD5: () => { },
    d6: 0,
    setD6: () => { },
    d7: 0,
    setD7: () => { },
    d8: 0,
    setD8: () => { },
    d9: 0,
    setD9: () => { },
    d10: 0,
    setD10: () => { },
    addProject:'',
    setAddProject: () => { },
    addLocation:'',
    setAddLocation:() => { },
    addMainCon:'',
    setAddMainCon: () => { },
    addWName:'',
    setAddWName: () => { },
    addWProject:'',
    setAddWProject: () => { },
    addWWorkscope:'',
    setAddWorkscope: () => { },
});

export const ProjectListProvider = ({ children }) => {

    const [projectList, setProjectList] = useState([]);
    const [workerList, setWorkerList] = useState([]);
    const [searchProject, setSearchProject] = useState('');
    const [searchMth, setSearchMth] = useState('');
    const [searchYear, setSearchYear] = useState('');
    const [searchWorker, setSearchWorker] = useState('');
    const [searchRate, setSearchRate] = useState(0);
    const [d31, setD31] = useState(0);
    const [d30, setD30] = useState(0);
    const [d29, setD29] = useState(0);
    const [d28, setD28] = useState(0);
    const [d1, setD1] = useState(0);
    const [d2, setD2] = useState(0);
    const [d3, setD3] = useState(0);
    const [d4, setD4] = useState(0);
    const [d5, setD5] = useState(0);
    const [d6, setD6] = useState(0);
    const [d7, setD7] = useState(0);
    const [d8, setD8] = useState(0);
    const [d9, setD9] = useState(0);
    const [d10, setD10] = useState(0);
    const [d11, setD11] = useState(0);
    const [d12, setD12] = useState(0);
    const [d13, setD13] = useState(0);
    const [d14, setD14] = useState(0);
    const [d15, setD15] = useState(0);
    const [d16, setD16] = useState(0);
    const [d17, setD17] = useState(0);
    const [d18, setD18] = useState(0);
    const [d19, setD19] = useState(0);
    const [d20, setD20] = useState(0);
    const [d21, setD21] = useState(0);
    const [d22, setD22] = useState(0);
    const [d23, setD23] = useState(0);
    const [d24, setD24] = useState(0);
    const [d25, setD25] = useState(0);
    const [d26, setD26] = useState(0);
    const [d27, setD27] = useState(0);
    const [addProject,setAddProject] = useState('');
    const [addLocation,setAddLocation] = useState('');
    const [addMainCon,setAddMainCon] = useState('');
    const [addWName,setAddWName] = useState('');
    const [addWProject,setAddWProject] = useState('');
    const [addWWorkscope,setAddWorkscope] = useState('');

    const value = { addWWorkscope,setAddWorkscope,addWProject,setAddWProject,addWName,setAddWName,addMainCon,setAddMainCon,addLocation,setAddLocation,addProject,setAddProject,projectList, setProjectList, searchProject, setSearchProject, searchMth, setSearchMth, searchYear, setSearchYear, workerList, setWorkerList, searchWorker, setSearchWorker, searchRate, setSearchRate, d31, setD31, d30, setD30, d29, setD29, d28, setD28, d1, setD1, d2, setD2, d3, setD3, d4, setD4, d5, setD5, d6, setD6, d7, setD7, d8, setD8, d9, setD9, d10, setD10, d11, setD11, d12, setD12, d13, setD13, d14, setD14, d15, setD15, d16, setD16, d17, setD17, d18, setD18, d19, setD19, d20, setD20, d21, setD21, d22, setD22, d23, setD23, d24, setD24, d25, setD25, d26, setD26, d27, setD27 };



    return (<ProjectListContext.Provider value={value}>{children}</ProjectListContext.Provider>)
};
import { ProjectListContext } from '../../context/projectlist.context';
import { useContext, useState } from 'react';
import { generateProjectList, addNewFBProject } from '../../utils/firebase/firebase.utils';
import { Button } from "@material-tailwind/react";

const ViewProject = () => {

    const { addProject, addLocation, addMainCon } = useContext(ProjectListContext);
    const [ele, setEle] = useState([]);
    const [rowCount, setRowCount] = useState(0);
    const [isLoading, setIsLoading] = useState(null);

    let RowBgStyle = '';
    let row = 0;

    const gridHandler = async () => {

        setIsLoading(<div className='flex justify-center text-sm py-2 h-5 text-red-600'>Searching...</div>);
        let arrResult = await generateProjectList();

        setRowCount(arrResult.length);
        setEle(arrResult);

        if (arrResult) {
            setIsLoading(<div className='flex justify-center text-sm py-2 h-5 text-green-700'>Search Completed.</div>);
        }

    }

    const addHandler = async () => {
        setIsLoading(<div className='flex justify-center text-sm py-2 h-5 text-red-700'>Record updating...</div>);


        await addNewFBProject(addProject, addLocation, addMainCon)
            .then(
                setIsLoading(<div className='flex justify-center items-center text-sm py-2 h-5 text-green-700 bg-green-100'>Record Added/Updated.</div>)
            )

    }


    return (<div className="overflow-x-auto shadow-lg sm:rounded-lg" >
        <div className="flex justify-center pb-2"><Button className='w-60 bg-gradient-to-r from-green-300 to-green-100 text-gray-700 hover:text-gray-900 drop-shadow-lg' onClick={addHandler}>ADD NEW/SAVE CHANGES</Button></div>

        <div className="flex justify-center pb-2"><Button className='w-60 bg-gradient-to-r from-cyan-300 to-blue-200 text-gray-700 hover:text-gray-900 drop-shadow-lg' onClick={gridHandler}>SEARCH</Button></div>

        {isLoading}
        <div className='flex justify-center text-sm py-2 h-10 font-semibold'>Record(s) found : {rowCount}</div>
        <table className="rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="rounded-lg text-xs text-gray-700 uppercase bg-gray-500 bg-gradient-to-r from-teal-200 to-blue-300">
                <tr>
                    <th scope="col" className="py-3 px-6 text-center">
                        No
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                        PROJECT NAME
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                        PROJECT LOCATION
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                        PROJECT MAIN CON
                    </th>
                </tr>
            </thead>
            <tbody>
                {ele.map((item) => {
                    row = row + 1
                    if (row % 2) {

                        RowBgStyle = 'bg-gray-100 bg-white border-b bg-gray-300 border-gray-300 text-gray-900';
                    } else {
                        RowBgStyle = 'bg-amber-50 bg-white border-b bg-gray-300 border-gray-300 text-gray-900';

                    }

                    return (
                        <tr className={RowBgStyle} key={item["rowcount"]}>
                            <th scope="row" className="py-3 px-6 font-medium whitespace-nowrap dark:text-white text-center">
                                {item["rowcount"]}
                            </th>
                            <td className="py-3 px-6 text-center">
                                {item["projectname"]}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {item["location"]}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {item["mainconname"]}
                            </td>
                        </tr>
                    )
                })}

                <tr className="border-b bg-gradient-to-r from-teal-200 to-blue-300 dark:border-gray-700 text-gray-900 text-lg font-semibold h-12">
                    <td colSpan='4' align='left' className='px-4'></td>

                </tr>
            </tbody>
        </table>
    </div>);


}
export default ViewProject;
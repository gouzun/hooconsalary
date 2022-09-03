import { ProjectListContext } from '../../context/projectlist.context';
import { useContext, useState, CSSProperties } from 'react';
import { generateSalarySheet } from '../../utils/firebase/firebase.utils';
import { Button } from "@material-tailwind/react";
import logo from '../../assets/72x72.png'



const SalaryGrid = () => {


    const { searchProject, searchMth, searchYear } = useContext(ProjectListContext);
    const [ele, setEle] = useState([]);
    const [rowCount, setRowCount] = useState(0);
    const [isLoading, setIsLoading] = useState(null);

    let grandTotal = 0;
    let RowBgStyle = '';
    let row = 0;

    const gridHandler = async () => {

        setIsLoading(<div className='flex justify-center text-sm py-2 h-5 text-red-600'>Searching...</div>);
        let arrResult = await generateSalarySheet(searchProject, searchMth, searchYear)
        setRowCount(arrResult.length);
        setEle(arrResult);

        if (arrResult) {
            setIsLoading(<div className='flex justify-center text-sm py-2 h-5 text-green-700'>Search Completed.</div>);
        }


    }

    return (<div className="overflow-x-auto shadow-lg sm:rounded-lg" >

        <div className="flex justify-center py-5"><Button className='w-60 bg-gradient-to-r from-cyan-300 to-blue-200 text-gray-700 hover:text-gray-900 drop-shadow-lg' onClick={gridHandler}>SEARCH</Button></div>
        {isLoading}
        <div className='flex justify-center text-sm py-2 h-10 font-semibold'>Record(s) found : {rowCount}</div>
        <table className="rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="rounded-lg text-xs text-gray-700 uppercase bg-gray-500 bg-gradient-to-r from-teal-200 to-blue-300">
                <tr>
                    <th scope="col" className="py-3 px-6 text-center">
                        No
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                        Name
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                        Total hrs
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                        Rate(RM)
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                        Amount
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

                    grandTotal = grandTotal + parseInt(item["amt"]);
                    return (
                        <tr className={RowBgStyle} key={item["rowcount"]}>
                            <th scope="row" className="py-3 px-6 font-medium whitespace-nowrap dark:text-white text-center">
                                {item["rowcount"]}
                            </th>
                            <td className="py-3 px-6 text-center">
                                {item["workername"]}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {item["totalhr"]}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {item["rate"]}
                            </td>
                            <td className="py-3 px-6 text-right">
                                {item["amt"].toLocaleString("en-US", {
                                    minimumFractionDigits: 2
                                })}
                            </td>
                        </tr>
                    )
                })}

                <tr className="border-b bg-gradient-to-r from-teal-200 to-blue-300 dark:border-gray-700 text-gray-900 text-lg font-semibold h-12">
                    <td colSpan='2' align='left' className='px-4'></td>
                    <td colSpan='5' align='right' className='px-4'>Total : {grandTotal.toLocaleString("en-US", {
                        minimumFractionDigits: 2
                    })}</td>
                </tr>
            </tbody>
        </table>
    </div>);


}
export default SalaryGrid;
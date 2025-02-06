import React from 'react';

interface InsuranceData {
    age: string;
    male: string;
    female: string;
}

interface InsuranceTableProps {
    title: string;
    description: string;
    name: string;
    data: InsuranceData[];
}

const InsuranceTable: React.FC<InsuranceTableProps> = ({ title, description,name, data }) => {
    return (
        <div className="w-full flex justify-center py-6">
            <div className="w-[85%]  bg-white shadow-md rounded-lg overflow-hidden">
                <h2 className="text-lg font-semibold p-4">{title}</h2>
                <div className='w-full flex flex-col md:flex-row border-gray-950
                border-b justify-between'>
                <p className='text-[#150f96] text-xl font-semibold'>(무){name}</p>
                <p className="text-sm text-gray-600 px-4 pb-2">{description}</p>
                </div>
                
                <table className="w-full border-collapse border-b border-t  border-gray-300 text-center">
                    <thead className="border-b border-t">
                        <tr>
                            <th className=" border-gray-300 p-2">나이</th>
                            <th className="border border-gray-300 p-2">남자</th>
                            <th className="border-b border-t border-gray-300 p-2">여자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border-b border-t border-gray-300 p-2">{item.age}</td>
                                <td className="border border-gray-300 p-2">{item.male}</td>
                                <td className="border-b border-t border-gray-300 p-2">{item.female}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};




export default InsuranceTable;

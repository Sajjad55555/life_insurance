import React from 'react';

interface InsuranceData {
    age: string;
    male: string;
    female: string;
    precent: string;
}

interface InsuranceTableProps {
    title: string;
    description: string;
    name: string;
    data: InsuranceData[];
}

const Blog_Detail4 = () => {
  const insuranceData:InsuranceTableProps[] = [
    {
        title: "기준 : 주계약 1,000만원, (무)신보철치료보장특약 1,000만원, (무)크라운보장특약 2,000만원, (무)소액치과치료특약 1,000만원, (무)전치부보철치료보장특약 500만원, 남자 40세, 만기환급금이 없는 순수보장형, 10년만기, 전기월납 (단위:원)",
        name: "(단위: 원)",
        description: "기준: 가입금액 1,000만원, 만기환급금이 없는 순수보장형, 10년만기, 전기월납 (단위: 원)",
        data: [
            { age: '30세', male: '14,600', female: '15,800',precent:"0.0%" },
            { age: '35세', male: '13,900', female: '14,900',precent:"0.0%"  },
            { age: '40세', male: '12,800', female: '14,200',precent:"24%"  },
            { age: '45세', male: '12,300', female: '14,400',precent:"0.0%"  },
        ]
    },
  ];

  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-[85%] bg-white shadow-md rounded-lg overflow-hidden">
        {insuranceData.map((insurance:InsuranceTableProps, index:number) => (
          <div key={index}>
            <h2 className="">{insurance.title}</h2>
            <div className='w-full flex flex-col md:flex-row border-gray-950 border-b justify-end'>
              <p className=' text-xl '>(무){insurance.name}</p></div>
            
            <table className="w-full border-collapse border-b border-t  border-gray-300 text-center">
              <thead className="border-b border-t">
                <tr className='font-bold'>
                  <th className=" border-gray-300 p-2">경과기간</th>
                  <th className="border border-gray-300 p-2">납입보험료 합계</th>
                  <th className="border border-gray-300 p-2">해약환급금</th>
                  <th className="border-b border-t border-gray-300 p-2">환급률</th>
                </tr>
              </thead>
              <tbody>
                {insurance.data.map((item:InsuranceData, index:number) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border-b border-t border-gray-300 p-2">{item.age}</td>
                    <td className="border border-gray-300 p-2">{item.male}</td>
                    <td className="border border-gray-300 p-2">{item.female}</td>
                    <td className="border-b border-t border-gray-300 p-2">{item.precent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog_Detail4;

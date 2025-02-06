import InsuranceTables from "./blog_insurance_Table";



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

const insuranceData:InsuranceTableProps[] = [
    {
        title: "주계약",
        name:"(무)신보철치료보장특약",
        description: "기준: 가입금액 1,000만원, 만기환급금이 없는 순수보장형, 10년만기, 전기월납 (단위: 원)",
        data: [
            { age: '30세', male: '14,600', female: '15,800' },
            { age: '35세', male: '13,900', female: '14,900' },
            { age: '40세', male: '12,800', female: '14,200' },
            { age: '45세', male: '12,300', female: '14,400' },
        ]
    },
    {
        title: "선택특약",
        name:"(무)신보철치료보장특약",
        description: "기준: 가입금액 2,000만원, 만기환급금이 없는 순수보장형, 20년만기, 전기월납 (단위: 원)",
        data: [
            { age: '30세', male: '28,500', female: '30,700' },
            { age: '35세', male: '27,000', female: '29,500' },
            { age: '40세', male: '25,400', female: '28,000' },
            { age: '45세', male: '23,900', female: '26,500' },
        ]
    }
];

export default function Blog_Detail3() {
    return (
        <div>
            {insuranceData.map((insurance:InsuranceTableProps, index:number) => (
                <InsuranceTables 
                    key={index}
                    title={insurance.title}
                    description={insurance.description}
                    data={insurance.data}
                    name={insurance.name}
                />
            ))}
        </div>
    )
}
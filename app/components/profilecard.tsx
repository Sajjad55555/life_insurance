import Image from 'next/image';
import { HiChevronDown } from 'react-icons/hi'; // Down icon import


interface ProfileCardProps {
  name: string;
  age: string;
  description: string;
  imageUrl: string;
  isSelected: boolean;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ 
  name, 
  age, 
  description, 
  imageUrl,
  isSelected 
}) => {
  return (
    <div className={`w-full  md:border-2 ${
      isSelected ? "border-blue-500"  : "md:border-gray-200" // Light gray border
    } md:rounded-lg md:shadow-lg flex content-center md:mt-5`}>
      
      <div className="md:w-[400px] w-full h-[200px] md:h-[550px] justify-center items-center flex flex-row md:flex-col">
        {/* Title - Black text forced */}
       
        {/* Image with light gray border */}
        <div className="flex justify-center  items-center md:mt-4 flex-col ">
        <div className="text-[15px] font-sans  md:text-[35px] md:font-bold text-gray-900 items-center order-2 md:order-1 flex flex-col mt-2 ">
          {name}
        </div>
    <div className='md:order-2  w-[100px] h-[100px] md:w-[150px] md:h-[150px] order-1'>
          <Image
            src={imageUrl}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-200" // Light border
          />
          </div>
        </div>

        {/* Info Section - Dark gray text */}
        <div className=''>
        <div className="md:text-center md:mt-8 md:mb-8">
          <h2 className=" text-[15px] mx-9 md:text-[25px] font-semibold text-black md:text-gray-900">
            {name}({age})
          </h2>
          <p className="text-gray-700 mx-10 text-[10px]  md:text-[20px] mt-2">{description}</p>
        </div>

        {/* Button - Blue when selected */}
        <div className="flex  items-center  md:items-center border bg-blue-500 rounded-lg  md:mx-auto mx-9 w-[200px]   md:mb-4">
          <button className={`md:px-6 justify-center items-center md:items-center flex w-full md:py-2 md:w-[200px] md:h-[50px] ${
            isSelected 
              ? "md:bg-blue-500 md:text-white" 
              : "md:bg-gray-100 md:text-gray-700"
          } md:rounded-lg font-medium md:border-2 ${
            isSelected ? "md:border-blue-500" : "md:border-gray-200"
          } transition-all`}>
            보장 확인
          </button>
          <HiChevronDown className="text-[40px] text-black  md:hidden  " />
 
          
        </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
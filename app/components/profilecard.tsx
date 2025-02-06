import Image from 'next/image';


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
    <div className={`w-full bg-white border-2 ${
      isSelected ? "border-blue-500" : "border-gray-200" // Light gray border
    } rounded-lg shadow-lg flex content-center mt-10`}>
      
      <div className="w-[400px] h-[550px] justify-center items-center flex flex-col">
        {/* Title - Black text forced */}
        <div className="text-[35px] font-bold text-gray-900 items-center flex flex-col mt-7">
          {name}
        </div>

        {/* Image with light gray border */}
        <div className="flex justify-center items-center mt-8">
          <Image
            src={imageUrl}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-200" // Light border
          />
        </div>

        {/* Info Section - Dark gray text */}
        <div className="text-center mt-8 mb-8">
          <h2 className="text-[25px] font-semibold text-gray-900">
            {name}({age})
          </h2>
          <p className="text-gray-700 mx-10 text-[20px] mt-2">{description}</p>
        </div>

        {/* Button - Blue when selected */}
        <div className="flex justify-center mb-4">
          <button className={`px-6 py-2 w-[200px] h-[50px] ${
            isSelected 
              ? "bg-blue-500 text-white" 
              : "bg-gray-100 text-gray-700"
          } rounded-lg font-medium border-2 ${
            isSelected ? "border-blue-500" : "border-gray-200"
          } transition-all`}>
            보장 확인
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
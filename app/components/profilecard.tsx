// components/ProfileCard.tsx
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  age: string;
  description: string;
  imageUrl: string;
//   onClick: () => void;

}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, description, imageUrl }) => {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden m-4">
      <div className="flex justify-center mt-4">
        {/* Profile Image */}
        <Image
          src={imageUrl}
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full border-4 border-blue-500"
        />
      </div>
      <div className="text-center mt-4 mb-4">
        {/* Name and Age */}
        <h2 className="text-xl font-semibold text-gray-800">
          {name}({age})
        </h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
      {/* Button */}
      <div className="flex justify-center mb-4">
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          보장 확인
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

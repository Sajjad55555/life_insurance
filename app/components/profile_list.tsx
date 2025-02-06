"use client";
import { useState, useRef, useEffect } from "react";
import ProfileCard from "./profilecard";
import Blog_Page_Navigation from "./blog_page_navigation";

interface Profile {
  name: string;
  age: string;
  description: string;
  imageUrl: string;
  additionalInfo: string;
  image: string;
}

const ProfileList: React.FC = () => {
  // Sample profiles data
  const profiles: Profile[] = [
    {
      name: "강OO",
      age: "남, 43세",
      description:
        "나이들수록 치과 갈 일은 많은 데 매번 나가는 치료비가 부담입니다.",
      imageUrl: "/images/d2.png", // Replace with the actual image path
      additionalInfo:
        "이 사람은 치료가 자주 필요하고 보험 가입을 고려하고 있습니다.",
        image:"/blog_image/product_cancer_sub1.jpg"
    },
    {
      name: "이OO",
      age: "여, 30세",
      description: "치료가 필요하지만 시간과 비용이 부담스러워 고민 중입니다.",
      imageUrl: "/images/d2.png", // Replace with the actual image path
      additionalInfo:
        "이 사람은 시간과 비용을 절감할 방법을 찾고 있습니다.",
        image:"/blog_image/product_chimea_sub1.jpg"
    },
    {
      name: "박OO",
      age: "남, 50세",
      description: "장기적인 치료비가 걱정되어 보험에 가입하고 싶습니다.",
      imageUrl: "/images/d2.png", // Replace with the actual image path
      additionalInfo:
        "이 사람은 장기적인 치료비에 대비한 보험을 찾고 있습니다.",
        image:"/blog_image/product_teeth_sub1.jpg"
    },
  ];

  // State to store the selected profile and a counter to force a reset.
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Ref to scroll into view when a profile is clicked
  const blogNavRef = useRef<HTMLDivElement>(null);

  // When a profile is clicked, update the selected profile and increment the counter.
  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile);
    // Increment the trigger even if the same profile is selected
    setResetTrigger((prev) => prev + 1);
  };

  // Scroll into view when a new profile is selected
  useEffect(() => {
    if (selectedProfile && blogNavRef.current) {
      blogNavRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProfile]);

  return (
    <div className="bg-white  min-h-screen p-8"> {/* Force white background */}
      <div className="flex flex-wrap gap-7 justify-center items-center">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="w-full max-w-xs mb-6 cursor-pointer"
            onClick={() => handleProfileClick(profile)}
          >
            <ProfileCard
              name={profile.name}
              age={profile.age}
              description={profile.description}
              imageUrl={profile.imageUrl}
              isSelected={selectedProfile?.name === profile.name}
            />
          </div>
        ))}
      </div>

      {/* Blog Navigation Section with ref for scrolling */}
      <div ref={blogNavRef}>
        <Blog_Page_Navigation
          image={selectedProfile ? selectedProfile.image : "/blog_image/product_cancer_sub1.jpg"}
          resetTrigger={resetTrigger}
        />
      </div>
    </div>
  );
};

export default ProfileList;

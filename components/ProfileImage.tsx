import Image from 'next/image';

const ProfileImage = () => {
  return (
    <Image
      className="rounded-full w-28 md:w-32"
      src="/assets/profile-image.jpeg"
      width={120}
      height={120}
      alt="profile image"
    />
  );
};

export default ProfileImage;

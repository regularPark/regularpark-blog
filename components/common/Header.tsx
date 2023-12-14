import Image from 'next/image';
import ProfileImage from '../ProfileImage';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row w-full bg-gradient-to-r from-blue-400 to-rose-300 text-white px-8 py-8">
      <ProfileImage />
      <div className="flex flex-col items-start pt-8 w-192 h-100 mr-auto md:w-full md:h-75 md:px-5">
        <div className="text-lg font-medium md:text-base">안녕하세요.</div>
        <div className="mt-1 text-2xl font-extrabold md:text-3xl lg:text-4xl ">
          프론트엔드 개발자 박정규입니다.
        </div>
      </div>
      <Image
        className="mt-2"
        src="/assets/gh-icon.svg"
        width={36}
        height={36}
        alt="github"
      />
      <Image
        className="mt-2"
        src="/assets/mail.svg"
        width={36}
        height={36}
        alt="mail"
      />
    </header>
  );
};

export default Header;

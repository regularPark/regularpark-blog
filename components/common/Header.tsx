import ProfileImage from '../ProfileImage';

const Header = () => {
  return (
    <header className="flex flex-row w-full bg-blue-400 text-white px-8 py-8">
      <ProfileImage />
      <div className="flex flex-col justify-center items-start pt-8 w-192 h-100 mx-auto md:w-full md:h-75 md:px-5">
        <div className="text-lg font-medium md:text-base">안녕하세요.</div>
        <div className="mt-1 text-3xl font-extrabold md:text-4xl">
          프론트엔드 개발자 박정규입니다.
        </div>
      </div>
    </header>
  );
};

export default Header;

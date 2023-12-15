import ProfileImage from '../ProfileImage';
import ToggleDarkMode from './ToggleDarkMode';
import mailIcon from '.././../public/assets/mail.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row w-full p-8 gap-4">
      <ProfileImage />
      <div className="flex flex-col items-start mt-8 w-192 h-100 mr-auto md:w-full md:h-75 md:px-5">
        <div className="text-lg font-medium md:text-base">안녕하세요.</div>
        <div className="mt-1 text-2xl font-extrabold md:text-3xl lg:text-4xl ">
          프론트엔드 개발자 박정규입니다.
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <ToggleDarkMode />
        <Link href="mailto:regularpark0110@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M23 20V6l-11 9L1 6v14h22Zm-11-8l10-8H2l10 8Z"
            />
          </svg>
        </Link>
        <Link href="https://github.com/regularPark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"
            />
          </svg>
        </Link>
        <Link
          className="text-xl"
          href="https://drive.google.com/file/u/1/d/17nAWFCg8m-0aUzw3GQgb5WlbHC91_6gJ/view"
        >
          Resume
        </Link>
        <Link
          className="text-xl"
          href="https://drive.google.com/file/u/1/d/17nAWFCg8m-0aUzw3GQgb5WlbHC91_6gJ/view"
        >
          Portfolio
        </Link>
      </div>
    </header>
  );
};

export default Header;

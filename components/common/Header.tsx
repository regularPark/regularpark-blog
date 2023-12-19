import ContactLinks from '../ContactLinks';
import Introduction from '../Introduction';
import ProfileImage from '../ProfileImage';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row w-full p-8 gap-4">
      <ProfileImage />
      <div className="flex flex-col w-full lg:flex-row lg:justify-between gap-4">
        <Introduction />
        <ContactLinks />
      </div>
    </header>
  );
};

export default Header;

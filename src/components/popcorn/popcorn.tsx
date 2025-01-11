import Icon from '../icon/icon';


const SubNav = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-50 z-50">
      <div className="grid grid-cols-3 items-center px-4 py-3">
        <div className="justify-self-start">
        <Icon
          URL="/back.png" // Path to your downloaded PNG
          iconColor="white"
          bgColor='white'
          iconBorderClr="transparent"
          rounded="rounded-2xl"
          className="cursor-pointer h-16 "
          onClick={() => window.history.back()} // Navigate back to the previous page
        />
        </div>
        <div className="justify-self-center">
          <img 
            src="/popcorn.png" 
            alt="Popcorn" 
            className="w-8 h-8"
          />
        </div>
        <div className="justify-self-end">
          {/* Empty div for spacing */}
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
import Icon from '../icon/icon';
import {Footer} from 'movie-design-hv';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fixed navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 py-2">
        <Icon 
          URL="/Mask group.png"
          className="w-12 h-12"
          imgClassName="w-8 h-8"
          rounded="full"
        />
        <div className="text-white font-medium">FIGMA MOVIE</div>
        <Icon 
          URL="/Figma_movie.png"
          className="w-12 h-12"
          imgClassName="w-8 h-8"
          rounded="full"
        />
        <Icon 
          URL="/notification 1.png"
          className="w-12 h-12"
          imgClassName="w-8 h-8"
          rounded="full"
        />
      </nav>

      {/* Main content area */}
      <main className="flex-grow mt-16">
        <slot />
      </main>

      {/* Fixed footer */}
      <Footer className="fixed bottom-0 w-full flex justify-around bg-black bg-opacity-90 px-4 py-3" rounded={true}>
        <Icon 
          URL="/heart 1.png"
          className="w-9 h-8"
          imgClassName="w-8 h-6"
          iconColor="white"
        />
        <Icon 
          URL="/Home.png"
          className="w-8 h-8"
          imgClassName="w-6 h-6"
          iconColor="white"
        />
        <Icon 
          URL="/ticketIcon.png"
          className="w-8 h-8"
          imgClassName="w-6 h-6"
          iconColor="white"
        />
      </Footer>
    </div>
  );
};

export default Layout;
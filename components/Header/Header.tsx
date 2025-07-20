import Image from 'next/image';

 function HeaderBar() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Orange line at the very top */}
      <div className="w-full h-1 bg-orange-500"></div>
      
      <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 sm:py-6 bg-white shadow-md">
        {/* Logo */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
          <Image src="/sahynex_logo.jpeg" alt="Sahynex Logo" width={100} height={33} className="sm:w-[120px] sm:h-[40px]" />
          <h1 className="text-lg sm:text-xl font-bold text-orange-500 text-center">CAREERS AT SAHYNEX</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
          <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-center">Career Home</a>
          <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-center">Search Jobs</a>
        </nav>
      </header>
    </div>
  );
}
export default HeaderBar;

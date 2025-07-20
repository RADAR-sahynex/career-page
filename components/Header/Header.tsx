import Image from 'next/image';

 function HeaderBar() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Orange line at the very top */}
      <div className="w-full h-1 bg-orange-500"></div>
      
      <header className="flex justify-between items-center px-6 py-6 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/sahynex_logo.jpeg" alt="Sahynex Logo" width={120} height={40} />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Career Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Search Jobs</a>
        </nav>
      </header>
    </div>
  );
}
export default HeaderBar;

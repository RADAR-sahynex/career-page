import Image from 'next/image';

 function HeaderBar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md padding-4">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/sahynex_logo.jpeg" alt="Sahynex Logo" width={120} height={40} />
      </div>

      {/* Navigation Links */}
      <nav className="space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Career Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Search Jobs</a>
      </nav>
    </header>
  );
}
export default HeaderBar;

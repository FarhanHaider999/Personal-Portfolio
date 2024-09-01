export const Header = () => {
  return ( 
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-10">
      <nav className="flex gap-4 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#About" className="nav-item">About</a>
        <a href="#Contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};

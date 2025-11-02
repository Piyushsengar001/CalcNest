import './Footer.css'; // If you're using custom CSS, keep this; otherwise, remove and use Tailwind below.

function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white text-center py-6 px-4 mt-8 shadow-lg rounded-t-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center space-x-2">
        <span className="text-2xl animate-pulse">❤️</span>
        <p className="text-lg font-semibold tracking-wide">© 2025 CalcNest — Made with </p>
        <span className="text-2xl animate-pulse">❤️</span>
      </div>
      <p className="text-sm mt-2 opacity-80">Explore more fun calculators and enjoy the magic!</p>
    </footer>
  );
}

export default Footer;
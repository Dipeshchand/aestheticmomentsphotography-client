import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="flex justify-center py-8 mt-20"
      style={{ fontFamily: "session" }}
    >
      <div className="grid grid-cols-3 gap-20 max-w-6xl w-full px-6">

        {/* Brand */}
        <div className="text-lg font-semibold">
          Aesthetic Moments
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <Link to="/about" className="block hover:text-red-500 transition">
            About Us
          </Link>
          <a  href="tel:+919347645827" className=" hover:text-red-500 transition"> Contact Us</a>
          <a
            href="tel:+919347645827"
            className="block hover:text-red-500 transition"
          >
            810856930
          </a>
        </div>

        {/* Legal */}
        <div className="space-y-2">
          <Link to="/privacy-policy" className="block hover:text-red-500 transition">
            Privacy Policy
          </Link>

          <Link to="/privacy-policy" className="block hover:text-red-500 transition">
            Terms & Conditions
          </Link>
        </div>

      </div>
    </footer>
  );
}

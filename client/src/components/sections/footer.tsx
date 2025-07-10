import { Mail } from "lucide-react";
import { SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Elevate Recap</h3>
            <p className="text-gray-300">
              Professional podcast show notes and content creation service.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-white block transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-white block transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link 
                href="/privacy-policy" 
                className="text-gray-300 hover:text-white block transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-gray-300 hover:text-white block transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <SiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <SiX className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Elevate Recap. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

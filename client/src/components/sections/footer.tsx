import { Mail } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Elevate Recap</h3>
            <p className="text-blue-200">
              Professional podcast show notes and content creation service.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-blue-200 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@elevaterecap.com
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 Elevate Recap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

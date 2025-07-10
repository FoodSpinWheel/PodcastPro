import Navigation from "@/components/navigation";
import Footer from "@/components/sections/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
              <p>
                Elevate Recap ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our podcast show notes and content services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Submit contact forms or inquiries</li>
                <li>Subscribe to our services</li>
                <li>Communicate with us via email or phone</li>
                <li>Provide podcast content for processing</li>
              </ul>
              <p className="mb-4">This information may include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Podcast information and links</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="mb-4">We may automatically collect certain information when you visit our website:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and browser information</li>
                <li>Device and operating system details</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing and improving our podcast show notes services</li>
                <li>Processing and fulfilling service requests</li>
                <li>Communicating with you about our services</li>
                <li>Sending administrative information and updates</li>
                <li>Analyzing website usage to improve user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and providing services</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Your Rights and Choices</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request information about how we process your data</li>
                <li>Object to certain processing activities</li>
              </ul>
              <p>To exercise these rights, please contact us at levi@elevaterecap.com.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences, though this may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Elevate Recap</strong></p>
                <p>Email: levi@elevaterecap.com</p>
                <p>Website: elevaterecap.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
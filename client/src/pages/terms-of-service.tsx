import Navigation from "@/components/navigation";
import Footer from "@/components/sections/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-16 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using Elevate Recap's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Description of Service</h2>
              <p className="mb-4">
                Elevate Recap provides podcast show notes and content creation services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Professional show notes creation</li>
                <li>Episode summaries and highlights</li>
                <li>Content optimization for podcasters</li>
                <li>Transcription and editing services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access and use Elevate Recap's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify or copy the materials or services</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on our website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Service Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment and Billing</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Services are billed according to the pricing plans displayed on our website</li>
                <li>Payment is due upon completion of services unless otherwise agreed</li>
                <li>All prices are in USD unless otherwise specified</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Client Responsibilities</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and complete information about your podcast</li>
                <li>Ensure you have rights to the content you submit for processing</li>
                <li>Respond to requests for clarification in a timely manner</li>
                <li>Review and approve deliverables within specified timeframes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Delivery and Revisions</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Standard delivery time is 48-72 hours for most services</li>
                <li>One round of revisions is included in the base price</li>
                <li>Additional revisions may incur extra charges</li>
                <li>Rush orders may be available for additional fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
              <p className="mb-4">
                Upon full payment, you retain ownership of your original podcast content. Elevate Recap retains rights to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Our proprietary methods and processes</li>
                <li>Use anonymized work samples for marketing purposes</li>
                <li>Our website content, branding, and materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Privacy and Confidentiality</h2>
              <p>
                We respect your privacy and will not share your podcast content or personal information with third parties except as outlined in our Privacy Policy or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Disclaimers</h2>
              <p className="mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Elevate Recap:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Excludes all representations and warranties relating to this website and its contents</li>
                <li>Does not guarantee the accuracy, completeness, or timeliness of information</li>
                <li>Makes no warranties about the availability or functionality of the service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Limitations of Liability</h2>
              <p>
                In no event shall Elevate Recap or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, even if Elevate Recap or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Accuracy of Materials</h2>
              <p>
                The materials appearing on Elevate Recap's website could include technical, typographical, or photographic errors. Elevate Recap does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Modification of Terms</h2>
              <p>
                Elevate Recap may revise these terms of service at any time without notice. By using this website and our services, you agree to be bound by the then-current version of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Cancellation and Refunds</h2>
              <p className="mb-4">
                Cancellation and refund policies:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Services can be cancelled before work begins for a full refund</li>
                <li>Partial refunds may be available if work has not been completed</li>
                <li>No refunds after final deliverables have been provided and approved</li>
                <li>Rush order fees are non-refundable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
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
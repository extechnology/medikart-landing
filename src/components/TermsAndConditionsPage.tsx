import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to the website of MEDIKART.STORE, operated through its subsidiary MEDIKART. These Terms and Conditions govern your use of www.medikart.store (the "Website"). By accessing or using the Website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use of Materials</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Except as expressly indicated to the contrary in any applicable Additional Terms, MEDIKART grants you a personal, non-exclusive, freely revocable (upon notice from us), non-transferable access to view, download, and print product catalogues or any other materials available on the Website, subject to the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You may access and use the materials solely for personal, informational, and internal purposes, in accordance with these Terms.</li>
              <li>You may not modify or alter product catalogues or any other materials available on the Website.</li>
              <li>You may not distribute, sell, rent, lease, license, or otherwise make the product catalogues or any other materials available on the Website to others.</li>
              <li>You may not remove any text, copyright, or other proprietary notices contained in the product catalogues or any other materials available on the Website.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              The rights granted to you in the product catalogues or any other materials are not applicable to the design, layout, or look and feel of the Website. Such elements are protected by intellectual property rights and may not be copied or imitated in whole or in part. The product catalogues or any other materials available on the Website shall not be copied or retransmitted unless expressly permitted by us.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Any software available on the Website is the property of MEDIKART or its third parties. You may not use, download, or install any software available on the Website unless otherwise expressly permitted by these Terms or by express written permission of MEDIKART.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Website and its content, including all text, graphics, user interfaces, visual interfaces, sounds and music (if any), artwork, and computer code (collectively, the "Content"), are owned and controlled by MEDIKART and are protected by copyright, patent, trademark laws, and various other intellectual property rights.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The trademarks, logos, and service marks displayed on the Website (the "Marks") are the property of MEDIKART or third parties. You are not permitted to use the Marks without prior consent from us or the relevant third parties.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You acknowledge and agree that you shall not copy, republish, post, display, translate, transmit, reproduce, or distribute any Content without obtaining the necessary authorization from MEDIKART or the third-party owner of such Content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Cancellation, Returns, and Refund Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-2"><strong>Cancellation Policy:</strong> Orders can be cancelled through the Website before they have been dispatched for delivery.</p>
            <p className="text-gray-600 leading-relaxed mb-2"><strong>Return Policy:</strong> Products or orders cannot be returned and will not be accepted after payment is made.</p>
            <p className="text-gray-600 leading-relaxed"><strong>Refund Policy:</strong> Refunds for eligible returns will reflect in your account within 7 working days after initiation.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Prescription Medications and Doctor Consultation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Certain medications on our Website require a valid prescription. If you add such medications to your cart and proceed with payment, please note that these will be dispatched only after you have consulted with a healthcare professional and obtained a valid prescription.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We strongly advise consulting with a qualified doctor before purchasing prescription medications. Our Website provides an easy option to schedule appointments with doctors and obtain prescriptions online and offline. Please use this service to receive appropriate medical advice and a valid prescription for your medications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Disclaimer of Warranties & Liabilities</h2>
            <p className="text-gray-600 leading-relaxed mb-4">To the maximum extent permitted by applicable law:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>The Website, services, and materials are provided on an "as is" basis without any warranty, express, implied, statutory, or otherwise, including implied warranties of title, non-infringement, merchantability, or fitness for a particular purpose.</li>
              <li>We make no warranty that (i) the Website or services will meet your requirements, (ii) your use of the Website or services will be uninterrupted, timely, secure, or error-free, (iii) the results obtained from using the Website, services, or materials will be accurate or reliable, (iv) the quality of the Website, services, or materials will meet your expectations, or (v) any errors or defects will be corrected.</li>
              <li>We will not be liable for any loss due to unauthorized use of your account or information. We do not warrant the quality, accuracy, or completeness of any data, information, product, or service on the Website.</li>
              <li>We are not responsible for any typographical errors, third-party products or services, or for any damages resulting from downloading material from the Website.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Indemnification and Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless MEDIKART, including its affiliates, vendors, agents, and employees, from any losses, liabilities, claims, damages, costs, and expenses (including legal fees) that arise from any breach of these Terms. Our total liability to you for any claim shall be limited to the amount paid by you for any specific voucher, product, or service under which the liability arises.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We will not be liable for any special, incidental, indirect, consequential, or punitive damages, including those resulting from loss of use, data, or profits, whether or not foreseeable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Violation of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              MEDIKART may terminate your access to the Website and block future access if you violate these Terms. Violations may also cause irreparable harm, and we may seek injunctive or equitable relief.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms will continue to apply until terminated by you or MEDIKART. You may terminate by not accessing the Website or closing your accounts. We may terminate these Terms with or without notice if you breach any provisions, if required by law, or if we discontinue the Website or services. Termination may include removal of access to the Website, deletion of materials, and barring further use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms and all transactions entered into on or through the Website shall be governed by the laws of India, without reference to conflict of laws principles. All claims and disputes shall be subject to the exclusive jurisdiction of the courts in Calicut, Kerala.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Report Abuse</h2>
            <p className="text-gray-600 leading-relaxed">
              If you encounter any abuse or violation of these Terms or objectionable content, please report it to our customer support team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We view the protection of your privacy as a very important principle. We may share or transfer your personal information in the event of a merger, acquisition, or reorganization of business entities. Please review our Privacy Policy for more information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Communications</h2>
            <p className="text-gray-600 leading-relaxed">
              By using our Website, you agree to receive communications from us via SMS, emails, phone calls, or WhatsApp related to your order, products, and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">14. General Provisions</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Notice:</strong> All notices from us will be served by email or general notification on the Website. Notices to us should be sent to Medikart.rk@gmail.com.</li>
              <li><strong>Assignment:</strong> You cannot transfer these Terms to any third party. We may transfer our rights without your consent.</li>
              <li><strong>Severability:</strong> If any provision is found to be unenforceable, it will be enforced to the maximum extent permissible, and the remaining Terms will continue in full force.</li>
              <li><strong>Waiver:</strong> Failure to enforce any provision of these Terms does not constitute a waiver of that provision or right.</li>
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: 05th June 2025</p>
          
          <div className="prose max-w-none">
            <p className="mb-6">Welcome to MEDIKART, a pharmaceutical initiative of MEDIKART. We strive to ensure your complete satisfaction with our products. If, for any reason, you are not entirely satisfied with your purchase, we are here to help. Please read our comprehensive refund policy carefully to understand your rights and responsibilities.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Eligibility for Refunds</h2>
            <p className="mb-4">To be eligible for a refund, the following conditions must be met:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>The product must be unused, unopened, and in the same condition that you received it.</li>
              <li>The product must be returned in its original packaging.</li>
              <li>The request for a refund must be made within 30 days from the date of purchase.</li>
              <li>You must provide valid proof of purchase, such as the original receipt or order confirmation email.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Non-Refundable Items</h2>
            <p className="mb-4">Certain items are non-refundable, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Products that have been opened, used, or tampered with.</li>
              <li>Products that are not in their original condition or packaging.</li>
              <li>Products purchased on sale or clearance.</li>
              <li>Gift cards or promotional items.</li>
              <li>Any item not in its original condition, damaged, or missing parts for reasons not due to our error.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Refund Process</h2>
            <p className="mb-4">To initiate a refund, please follow these steps:</p>
            <ol className="list-decimal pl-6 mb-6">
              <li><strong>Contact Us:</strong> Reach out to our customer support team at Medikart.rk@gmail.com with your order number and a detailed reason for the refund request.</li>
              <li><strong>Approval:</strong> Once your request is reviewed, we will notify you of the approval or rejection of your refund.</li>
              <li><strong>Return the Product:</strong> If your refund is approved, we will provide instructions on how to return the product. Please ensure the product is securely packaged to avoid damage during shipping.</li>
              <li><strong>Inspection:</strong> Upon receiving the returned product, we will inspect it to ensure it meets our refund eligibility criteria.</li>
              <li><strong>Refund Issuance:</strong> If the product passes the inspection, we will process your refund. The refund will be credited back to your original method of payment within 7-10 business days.</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Shipping Costs</h2>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Customer Responsibility:</strong> You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</li>
              <li><strong>Damaged or Defective Items:</strong> If you received a damaged or defective product, we will cover the cost of return shipping. Please contact us immediately at Medikart.rk@gmail.com with photographic evidence of the damage or defect.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Late or Missing Refunds</h2>
            <p className="mb-4">If you have not received your refund within the specified time frame, please check the following steps:</p>
            <ol className="list-decimal pl-6 mb-6">
              <li><strong>Bank Processing Time:</strong> Contact your bank or credit card company, as it may take some time before your refund is officially posted.</li>
              <li><strong>Contact Us:</strong> If you have completed the above steps and still have not received your refund, please contact our customer support team at Medikart.rk@gmail.com for further assistance.</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Exchanges</h2>
            <p className="mb-6">We only replace items if they are defective or damaged. If you need to exchange a defective or damaged item for the same product, please contact us at Medikart.rk@gmail.com with photographic evidence of the damage or defect. Once approved, we will provide instructions for returning the product and send a replacement at no additional cost.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Special Circumstances</h2>
            <p className="mb-4">In certain situations, we may offer partial refunds at our discretion:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Any item not in its original condition, damaged, or missing parts for reasons not due to our error.</li>
              <li>Any item that is returned more than 30 days after delivery.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. International Orders</h2>
            <p className="mb-4">For international orders, the same refund policy applies. However, please note the following additional conditions:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Return shipping costs for international orders are the responsibility of the customer.</li>
              <li>Refunds will be issued in the original payment currency and may be subject to exchange rate fluctuations and additional bank fees.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Information</h2>
            <p className="mb-4">If you have any questions or concerns regarding our refund policy, please contact us:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p>Floor No.: GROUND FLOOR</p>
              <p>Building No./Flat No.: 18/140A1, A2</p>
              <p>Name Of Premises/Building: UNITED PLAZA</p>
              <p>Road/Street: VELIPARAM DESHAM</p>
              <p>Locality/Sub Locality: RAMANATTUKARA</p>
              <p>City/Town/Village: Kozhikode</p>
              <p>District: Kozhikode</p>
              <p>State: Kerala</p>
              <p>PIN Code: 673032</p>
              <p>Email: medikart.rk@gmail.com</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to This Refund Policy</h2>
            <p className="mb-6">We reserve the right to update or modify this refund policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. It is your responsibility to review this policy periodically for any updates or changes.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Your Acceptance of These Terms</h2>
            <p className="mb-6">By purchasing our products, you signify your acceptance of this refund policy. If you do not agree to this policy, please do not purchase our products. Your continued use of our website following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
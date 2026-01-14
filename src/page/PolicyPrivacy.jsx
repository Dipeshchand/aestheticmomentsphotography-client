import React from "react";

export default function PolicyPrivacy() {
  return (
    <div className="w-full  px-4 py-8 md:px-10 md:py-16 flex justify-center bg-[#FFF8EF]" >
      <div className="w-full max-w-4xl text-gray-800">

        {/* TERMS */}
        <h1 className="text-2xl md:text-3xl mt-25 font-semibold mb-6" style={{ fontFamily: "light" }}>
          Terms & Conditions
        </h1>

        <h2 className="font-semibold mt-10">1. About Our Services</h2>
        <p className="mt-2 text-sm md:text-base">
          We provide professional wedding photography, cinematography, and related creative services. 
          By booking with us, you agree to these terms.
        </p>

        <h2 className="font-semibold mt-6">2. Booking & Payments</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>A booking is confirmed only after an advance payment.</li>
          <li>The remaining balance must be paid on or before the event date unless otherwise agreed.</li>
          <li>Booking amounts are non-refundable as dates are reserved exclusively for you.</li>
        </ul>

        <h2 className="font-semibold mt-6">3. Cancellations & Rescheduling</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>If a booking is cancelled by the client, the advance amount will not be refunded.</li>
          <li>If the event is rescheduled, we will try to accommodate the new date subject to availability.</li>
        </ul>

        <h2 className="font-semibold mt-6">4. Deliverables</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>Final photos and videos will be delivered within the agreed timeline.</li>
          <li>Raw, unedited files are not provided unless specifically agreed in writing.</li>
        </ul>

        <h2 className="font-semibold mt-6">5. Creative Rights</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>All photos and videos are creatively owned by our studio.</li>
          <li>
            We reserve the right to use selected work for portfolio, website, and promotional purposes
            unless the client requests otherwise in writing.
          </li>
        </ul>

        <h2 className="font-semibold mt-6">6. Client Responsibilities</h2>
        <p className="mt-2 text-sm md:text-base">
          Clients must ensure proper permissions, venue access, and cooperation during the shoot for smooth coverage.
        </p>

        <h2 className="font-semibold mt-6">7. Liability</h2>
        <p className="mt-2 text-sm md:text-base">
          While we take all necessary care, we are not responsible for issues caused by venue restrictions, 
          weather, technical failures, or unforeseen circumstances beyond our control.
        </p>

        <h2 className="font-semibold mt-6">8. Acceptance</h2>
        <p className="mt-2 text-sm md:text-base">
          By booking our services, you accept these Terms & Conditions.
        </p>

        {/* PRIVACY */}
        <h1 className="text-2xl md:text-3xl font-semibold mt-12 mb-4" style={{ fontFamily: "light" }}>
          Privacy Policy
        </h1>

        <p className="text-sm md:text-base">
          We respect your privacy and are committed to protecting your personal information.
        </p>

        <h2 className="font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Event details</li>
          <li>Photos and videos from your event</li>
        </ul>

        <h2 className="font-semibold mt-6">2. How We Use Your Information</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>To communicate with you</li>
          <li>To manage bookings</li>
          <li>To deliver photos and videos</li>
          <li>To improve our services</li>
        </ul>

        <h2 className="font-semibold mt-6">3. Photos & Media</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
         <li>Photos and videos may be used for marketing, social media, and portfolio unless you request privacy in writing.</li>
        </ul>

        <h2 className="font-semibold mt-6">4.Data Security</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>We store your information securely and only authorized team members can access it.</li>
        </ul>

        <h2 className="font-semibold mt-6">5. Third-Party Services</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>We may use platforms like cloud storage or galleries (such as Fotoowl or Cloudinary) to deliver your media. These services follow their own privacy policies.</li>
        </ul>

        <h2 className="font-semibold mt-6">6. Your Rights</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>You may request correction or deletion of your personal data anytime by contacting us.</li>
        </ul>

        <h2 className="font-semibold mt-6">6. Updates</h2>
        <ul className="list-disc ml-5 mt-2 text-sm md:text-base space-y-1">
          <li>This policy may be updated occasionally. Any changes will be posted on this website.</li>
        </ul>

      </div>
    </div>
  );
}

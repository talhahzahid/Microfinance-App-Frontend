import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section class="max-w-5xl mx-auto px-5 py-25 text-gray-800">
        <h2 class="text-4xl font-bold mb-6 text-center">About Us</h2>
        <p class="text-lg leading-relaxed mb-5">
          At <strong>Loan App</strong>, we believe that financial empowerment is
          the key to unlocking a brighter and more secure future. Founded with
          the mission to provide accessible, transparent, and customer-friendly
          financial solutions, we are proud to serve individuals, families, and
          small businesses across the nation.
        </p>

        <p class="text-lg leading-relaxed mb-5">
          We understand that life doesn’t always go as planned. Whether it's
          starting a new business, funding your child's education, managing an
          emergency, or improving your home — a loan can be the stepping stone
          toward your goals. That’s why we offer a variety of loan options
          tailored to your unique needs, including personal loans, business
          loans, education financing, and more.
        </p>

        <p class="text-lg leading-relaxed mb-5">
          Our process is designed to be fast, easy, and secure. From your
          initial application to the final repayment, we’re with you every step
          of the way. We combine the power of technology with a human touch to
          deliver a borrowing experience that is not just efficient, but also
          compassionate. Our team is dedicated to helping you make informed
          decisions, ensuring complete clarity on terms, interest rates, and
          repayments — no hidden fees, no surprises.
        </p>

        <p class="text-lg leading-relaxed mb-5">
          What sets us apart is our unwavering commitment to customer service.
          We believe that trust is earned through transparency, consistency, and
          care. That’s why every interaction — whether online or in-person — is
          rooted in integrity, respect, and support. With flexible repayment
          plans, competitive interest rates, and personalized loan advice, we’re
          here to help you build financial confidence.
        </p>

        <p class="text-lg leading-relaxed mb-5">
          Over the years, we’ve helped thousands of clients turn their plans
          into progress. From young entrepreneurs launching startups to families
          navigating tough times — our loans have enabled dreams, stabilized
          futures, and created lasting impacts.
        </p>

        <p class="text-lg leading-relaxed mb-5">
          As we move forward, our goal remains simple: to be your trusted
          financial partner. We’re not just in the business of lending — we’re
          in the business of building futures.
        </p>

        <p class="text-lg leading-relaxed">
          Thank you for considering <strong>Loan App</strong>. We look forward
          to helping you take your next big step — today, tomorrow, and beyond.
        </p>
      </section>
      <Link to="/dashboard">
        <button>dashboard</button>
      </Link>
    </>
  );
};

export default About;

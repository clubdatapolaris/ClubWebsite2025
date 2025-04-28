import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <main className="pt-24 pb-16 px-8">
        <section className="flex flex-col lg:flex-row items-start justify-center text-center gap-10 relative">
          {/* Live Location Map */}
          <div className="w-full lg:w-1/2 h-[380px] border border-gray-800 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Live Location"
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d59451.41159063207!2d74.83758613599359!3d21.36180397501443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bdf3203969b41c7%3A0xb4050432d04ef5b8!2sNimzari%20Naka%2C%20Shirpur%2C%20Maharashtra%20425405!3m2!1d21.361808999999997!2d74.87878599999999!4m5!1s0x3bdf3203969b41c7%3A0xb4050432d04ef5b8!2sRC%20Patel%20Institute%20of%20Technology%2C%20Shirpur!3m2!1d21.361808999999997!2d74.87878599999999!5e0!3m2!1sen!2sin!4v1743747022530!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 h-[380px] bg-gray-900/70 p-6 rounded-xl shadow-md border border-gray-800 overflow-y-auto">
            <h2 className="text-2xl font-bold text-white mb-4 font-display text-center">Reach Out to Us</h2>
            <form 
              className="space-y-3 text-white"
              action="https://formsubmit.co/datapolaris.cse.rcpit@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="flex flex-col text-left">
                <label className="mb-1">Name</label>
                <input name="Name" type="text" className="p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-club-accent" placeholder="Your Name" required />
              </div>
              <div className="flex flex-col text-left">
                <label className="mb-1">Branch</label>
                <input name="Branch" type="text" className="p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-club-accent" placeholder="Your Branch" required />
              </div>
              <div className="flex flex-col text-left">
                <label className="mb-1">Year</label>
                <input name="Year" type="text" className="p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-club-accent" placeholder="Year of Study" required />
              </div>
              <div className="flex flex-col text-left">
                <label className="mb-1">Subject</label>
                <input name="Subject" type="text" className="p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-club-accent" placeholder="Subject" required />
              </div>
              <div className="flex flex-col text-left">
                <label className="mb-1">Email Address</label>
                <input name="Email" type="email" className="p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-club-accent" placeholder="example@domain.com" required />
              </div>
              <div className="flex flex-col text-left">
                <label className="mb-1">Message</label>
                <textarea name="Message" className="p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-club-accent" rows={3} placeholder="Type your message here..." required></textarea>
              </div>
              <button type="submit" className="mt-2 w-full py-2 bg-club-accent text-white font-semibold rounded hover:bg-club-accent/80 transition">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contact;
"use client"; // Required for form handling in Next.js App Router

export default function ContactForm() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-bizonDark">Ready To Start Your Project?</h2>
          <p className="text-gray-500 mt-2">Share a few details and we'll prepare a tailored proposal.</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Your Name *</label>
            <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-600 outline-none transition" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Company Name *</label>
            <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-600 outline-none transition" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">What services are you looking for?</label>
            <select className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-600 outline-none transition bg-white">
              <option>Web Development</option>
              <option>SEO Services</option>
              <option>Paid Advertising</option>
              <option>Social Media Marketing</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">Share more details</label>
            <textarea rows="4" className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-600 outline-none transition"></textarea>
          </div>
          <button className="md:col-span-2 bg-[#2563EB] text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg">
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
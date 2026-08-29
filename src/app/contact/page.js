import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-900">
      
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-sm font-bold tracking-[3px] text-orange-500">
            GET IN TOUCH
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                Let's Find Your
                <span className="block text-orange-500">
                  Dream Property
                </span>
              </h1>
            </div>

            <p className="max-w-xl leading-7 text-gray-600">
              Whether you're looking to buy, sell, rent, or simply need expert
              advice, our team is here to help you make the right move.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-5">
          
          {/* Left Contact Information */}
          <div className="lg:col-span-2">
            <p className="text-sm font-bold tracking-[3px] text-orange-500">
              CONTACT INFORMATION
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              We're Here to
              <span className="block text-orange-500">
                Help You
              </span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-gray-600">
              Reach out to our team and we'll get back to you as soon as
              possible. Your perfect property could be just one conversation
              away.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-4">
              
              <ContactCard
                icon={<Phone size={23} />}
                title="Call Us"
                content="+92 300 1234567"
              />

              <ContactCard
                icon={<Mail size={23} />}
                title="Email Us"
                content="hello@landmark.com"
              />

              <ContactCard
                icon={<MapPin size={23} />}
                title="Visit Us"
                content="Lahore, Pakistan"
              />

              <ContactCard
                icon={<Clock size={23} />}
                title="Working Hours"
                content="Monday - Saturday | 9:00 AM - 6:00 PM"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
              
              <div className="mb-8">
                <p className="text-sm font-bold tracking-[3px] text-orange-500">
                  SEND A MESSAGE
                </p>

                <h2 className="mt-3 text-3xl font-semibold">
                  Tell Us How We Can Help
                </h2>
              </div>

              <form className="space-y-6">
                
                {/* Name and Email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+92 300 0000000"
                      className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      I'm Interested In
                    </label>

                    <select className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
                      <option>Buying a Property</option>
                      <option>Renting a Property</option>
                      <option>Selling a Property</option>
                      <option>Property Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell us about the property you're looking for..."
                    className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="flex items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
                >
                  Send Message
                  <Send size={19} />
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200 bg-orange-500">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center lg:px-10">
          
          <div>
            <p className="text-sm font-bold tracking-[3px] text-white">
              READY TO MOVE?
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-white">
              Your Next Chapter Starts Here.
            </h2>
          </div>

          <a
            href="tel:+923001234567"
            className="flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-medium text-orange-500 transition-all hover:bg-orange-800 hover:text-white"
          >
            Talk to an Expert
            <ArrowRight size={20} />
          </a>

        </div>
      </section>

    </main>
  );
}


/* Reusable Contact Card */
function ContactCard({ icon, title, content }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-orange-200 hover:shadow-md">
      
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {content}
        </p>
      </div>

    </div>
  );
}
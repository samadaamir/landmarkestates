import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  House,
  Users,
  Handshake,
  Trophy,
  ShieldCheck,
  Building2,
  Headphones,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Trust & Transparency",
      description: "We believe in honest communication and building lasting trust.",
    },
    {
      icon: Users,
      title: "Client First",
      description: "Your goals are our priority. We tailor solutions for you.",
    },
    {
      icon: Building2,
      title: "Quality Properties",
      description: "We handpick properties that meet the highest standards.",
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      description: "From searching to closing, we're with you every step.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
    

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative h-125 overflow-hidden rounded-2xl">
              <Image
                src="/interior.jpg"
                alt="Luxury property interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-orange-500 p-7 text-white shadow-xl md:left-6">
              <h3 className="text-4xl font-bold">12+</h3>
              <p className="mt-1 text-sm">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-bold tracking-[3px] text-orange-500">
              WHO WE ARE
            </p>

            <h2 className="text-4xl leading-tight font-semibold md:text-5xl">
              Your Trusted Partner
              <br />
              in <span className="text-orange-500">Real Estate</span>
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Land Mark is a real estate company dedicated to helping clients
              buy, sell, and rent properties with confidence. With deep market
              knowledge and a client-first approach, we deliver results that
              exceed expectations.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              <Stat icon={House} number="500+" text="Properties" />
              <Stat icon={Users} number="1200+" text="Happy Clients" />
              <Stat icon={Handshake} number="250+" text="Deals Closed" />
              <Stat icon={Trophy} number="12+" text="Years Experience" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-3xl bg-gray-50 p-8 md:p-14">
          <p className="mb-4 text-center text-sm font-bold tracking-[3px] text-orange-500">
            WHAT WE STAND FOR
          </p>

          <h2 className="mb-12 text-center text-4xl font-semibold">
            Our Core Values
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="text-center"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-semibold">{value.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-bold tracking-[3px] text-orange-500">
              OUR EXPERIENCE
            </p>

            <h2 className="text-4xl leading-tight font-semibold md:text-5xl">
              Experience That
              <br />
              Works <span className="text-orange-500">for You</span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-gray-600">
              Our team of real estate experts brings local knowledge, market
              insight, and negotiation expertise to help you make the right
              move.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Expert property consultants",
                "In-depth market analysis",
                "Personalized recommendations",
                "Secure transactions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-orange-500"
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-orange-500 px-6 py-3 text-orange-500 transition-all hover:bg-orange-500 hover:text-white"
            >
              Meet Our Team
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Team Image */}
          <div className="relative h-125 overflow-hidden rounded-2xl">
            <Image
              src="/team.jpg"
              alt="Land Mark real estate team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 text-white md:flex-row lg:px-10">
          <div className="flex items-center gap-5">
            <House size={50} />

            <div>
              <h2 className="text-3xl font-semibold">
                Ready to Find Your
                <br />
                Dream Property?
              </h2>
            </div>
          </div>

          <p className="max-w-sm text-orange-50">
            Let Land Mark help you discover a place you'll love to call home.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-medium text-orange-500 transition-all hover:scale-105"
          >
            Contact Us Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}


/* Stat Component */
function Stat({ icon: Icon, number, text }) {
  return (
    <div>
      <Icon className="mb-3 text-orange-500" size={28} />

      <h3 className="text-2xl font-bold">{number}</h3>

      <p className="mt-1 text-sm text-gray-500">{text}</p>
    </div>
  );
}
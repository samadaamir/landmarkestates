import { CircleCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-full overflow-hidden">

      {/* Left Side - Contact */}
      <div className="flex w-1/2 flex-col justify-center p-10">
        <h1 className="text-4xl font-bold">Family-Friendly Housing in Karachi</h1>

        <p className="mt-4 text-gray-500">
          Find your next home from our carefully-selected
          friendly listings🏠
        </p>
        <div className="flex gap-6">
          <p className="mt-4 flex gap-1.5 "><CircleCheck className="text-orange-600" />No hidden fees</p>
          <p className="mt-4 flex gap-1.5 "><CircleCheck className="text-orange-600" />Bilingual Support</p>
        </div>
        <p className="mt-4 flex gap-1.5 "><CircleCheck className="text-orange-600" />Smooth process</p>

        <div className="mt-3 flex w-full items-center gap-3 rounded-4xl bg-white p-3 shadow-lg">

          {/* Area */}
          <select className="flex-1 rounded-3xl border border-gray-200 px-4 py-3 outline-none">
            <option>Select Area</option>
            <option>Downtown</option>
            <option>City Center</option>
            <option>North Area</option>
            <option>South Area</option>
          </select>

          {/* Property Type */}
          <select className="flex-1 rounded-3xl border border-gray-200 px-4 py-3 outline-none">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
          </select>

          {/* Max Rent */}
          <select className="flex-1 rounded-3xl border border-gray-200 px-4 py-3 outline-none ">
            <option>Max Rent</option>
            <option>15,000</option>
            <option>20,000</option>
            <option>25,000</option>
            <option>30,0000</option>
          </select>

          {/* CTA Button */}
          <button className="rounded-3xl bg-black px-8 py-3 font-medium text-white transition-all hover:bg-orange-500">
            Contact
          </button>

        </div>
      </div>

      {/* Right Side - Home Image */}
      <div className="flex h-full w-1/2 items-center justify-center p-10">
        <img
          src="/home1.jpg"
          alt="Modern Home"
          className="max-h-full max-w-full object-contain rounded-2xl"
        />
      </div>

    </div>
  );
}
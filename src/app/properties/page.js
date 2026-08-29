import Image from "next/image";
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Bahria Town, Lahore",
    price: "$2,500",
    type: "For Rent",
    image: "/property1.jpg",
    beds: 4,
    baths: 3,
    area: "3,200 sqft",
  },
  {
    id: 2,
    title: "Premium Family House",
    location: "DHA Phase 6, Lahore",
    price: "$1,800",
    type: "For Rent",
    image: "/property2.jpg",
    beds: 5,
    baths: 4,
    area: "4,000 sqft",
  },
  {
    id: 3,
    title: "Modern City Apartment",
    location: "Gulberg, Lahore",
    price: "$900",
    type: "For Rent",
    image: "/property3.jpg",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
  },
  {
    id: 4,
    title: "Elegant Luxury Villa",
    location: "DHA Phase 5, Lahore",
    price: "$3,200",
    type: "For Sale",
    image: "/property4.jpg",
    beds: 6,
    baths: 5,
    area: "5,000 sqft",
  },
  {
    id: 5,
    title: "Contemporary Apartment",
    location: "Johar Town, Lahore",
    price: "$1,100",
    type: "For Rent",
    image: "/property5.jpg",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
  },
  {
    id: 6,
    title: "Exclusive Dream Home",
    location: "DHA Phase 8, Lahore",
    price: "$4,500",
    type: "For Sale",
    image: "/property6.jpg",
    beds: 5,
    baths: 5,
    area: "6,200 sqft",
  },
];

export default function Properties() {
  return (
    <main className="bg-[#fafafa]">
    
      {/* Properties */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold tracking-[3px] text-orange-500">
              FEATURED LISTINGS
            </p>

            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
              Discover Exceptional
              <span className="block text-orange-500">Places to Live</span>
            </h2>
          </div>

          <p className="max-w-md text-gray-600">
            Browse our latest collection of carefully selected properties.
          </p>
        </div>

        {/* Property Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <article
              key={property.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white">
                  {property.type}
                </span>

                <button className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-all hover:bg-orange-500 hover:text-white">
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {property.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={17} className="text-orange-500" />
                  {property.location}
                </div>

                <div className="my-6 h-px bg-gray-100" />

                {/* Features */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <BedDouble size={18} className="text-orange-500" />
                    {property.beds} Beds
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath size={18} className="text-orange-500" />
                    {property.baths} Baths
                  </div>

                  <div className="flex items-center gap-2">
                    <Maximize size={17} className="text-orange-500" />
                    {property.area}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">
                      Starting from
                    </p>

                    <p className="text-2xl font-bold text-orange-500">
                      {property.price}
                    </p>
                  </div>

                  <span className="text-sm text-gray-500">
                    Premium Listing
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-full border border-gray-300 px-8 py-4 font-medium transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
            Explore More Properties
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 text-white md:flex-row md:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold tracking-[3px] text-orange-500">
              CAN'T FIND WHAT YOU NEED?
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Let Us Find Your Perfect Property
            </h2>

            <p className="mt-3 max-w-xl text-white">
              Tell us what you're looking for, and our real estate experts
              will help you find a property that matches your lifestyle.
            </p>
          </div>

          <button className="flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-orange-500 transition-all hover:bg-orange-600 hover:text-white">
            Contact Our Experts
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}
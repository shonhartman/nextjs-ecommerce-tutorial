/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import {
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

const navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "Vinyl", href: "/vinyl" },
    { name: "Merchandise", href: "/merch" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <div className="bg-white">
      <MobileMenu navigation={navigation} currencies={currencies} />

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <Image
                        src="https://tailwindui.com/img/logos/workflow-mark.svg"
                        alt="logo"
                        width={35}
                        height={32}
                      />
                    </a>
                  </div>
                  {navigation.pages.map((page) => (
                    <div
                      key={page.name}
                      className="flex last:mr-0 mr-3 items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      <Link href={page.href}>{page.name}</Link>
                    </div>
                  ))}

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    <Image
                      src="https://tailwindui.com/img/logos/workflow-mark.svg"
                      alt=""
                      className="h-8 w-auto"
                      width={35}
                      height={32}
                    />
                  </a>

                  <div className="flex-1 flex items-center justify-end">
                    <a
                      href="#"
                      className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                    >
                      Search
                    </a>

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      <a
                        href="#"
                        className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                      >
                        <span className="sr-only">Help</span>
                        <QuestionMarkCircleIcon
                          className="w-6 h-6"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        href="#"
                        className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                      >
                        Help
                      </a>

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <a
                          href="#"
                          className="group -m-2 p-2 flex items-center"
                        >
                          <ShoppingBagIcon
                            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            0
                          </span>
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

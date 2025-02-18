import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container max-w-[25rem] mx-auto md:max-w-[90rem]">
        {/* Logo Section */}
        <div className="flex lg:flex-1 mb-6">
          <p className="brand__logo text-secondaryColor flex">BURGER</p>
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-14 w-auto"
              src="/image/brand-logo.webp"
              alt="Burger King Logo"
              width={56}
              height={56}
            />
          </Link>
          <p className="brand__logo ml-0 text-secondaryColor flex">KING</p>
        </div>

        {/* Footer Links and Info */}
        <ul className="grid grid-cols-1 items-start gap-5 pb-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Follow Us */}
          <li>
            <div className="space-y-3 mr-5">
              <div className="space-y-2">
                <h3 className="text-2xl uppercase font-display font-bold">
                  Follow Us
                </h3>
                <div className="space-x-3">
                  <i className="fa-brands fa-facebook-f text-2xl cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  <i className="fa-brands fa-twitter text-2xl cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                  <i className="fa-brands fa-square-instagram text-2xl cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                </div>
              </div>
            </div>
          </li>

          {/* Support Links */}
          <li>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl uppercase font-display font-bold">
                Support
              </h3>
              <Link href="#" className="text-xs hover:text-secondaryColor">
                FAQ's
              </Link>
              <Link href="#" className="text-xs hover:text-secondaryColor">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs hover:text-secondaryColor">
                Terms & Condition
              </Link>
              <Link href="#" className="text-xs hover:text-secondaryColor">
                Contact
              </Link>
            </div>
          </li>

          {/* Contact Information */}
          <li className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl uppercase font-display font-bold">
                Phone
              </h3>
              <p className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-phone text-lg text-secondaryColor"></i>
                +1 000 000 0000
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl uppercase font-display font-bold">
                Email
              </h3>
              <p className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-envelope text-lg text-secondaryColor"></i>
                burgerking.info@email.com
              </p>
            </div>
          </li>

          {/* Order Online and App Download */}
          <li className="space-y-8">
            <div className="space-y-2">
              <article
                id="online-delivery"
                className="flex flex-col items-center gap-y-4"
              >
                <h2 className="font-display text-2xl font-bold uppercase text-whiteColor">
                  Order Online
                </h2>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 bg-secondaryColor text-white px-4 py-2 rounded flex items-center justify-center text-center"
                >
                  Order Now <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>
              <article className="flex flex-col items-center gap-y-4">
                <h2 className="font-display text-xl font-bold uppercase text-whiteColor">
                  Download Burger King App
                </h2>
                <div className="grid grid-cols-2 gap-x-3">
                  <Link
                    href="https://play.google.com/store/apps/details?id=ph.burgerking&hl=en-PH"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/image/play-store.webp"
                      alt="Get it on Google Play"
                      width={284}
                      height={85}
                    />
                  </Link>
                  <Link
                    href="https://apps.apple.com/ph/app/burger-king-philippines/id1577597335"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/image/app-store.webp"
                      alt="Download on the App Store"
                      width={284}
                      height={85}
                    />
                  </Link>
                </div>
              </article>
            </div>
          </li>
        </ul>

        {/* Footer Copyright */}
        <div className="xxxl:mx-auto xxxl:max-w-7xl xxl:mx-auto xxl:max-w-6xl xl:mx-auto xl:max-w-5xl lg:mx-auto lg:max-w-4xl md:mx-auto md:max-w-2xl mx-4 border-t border-coffee pb-9 pt-6 text-lg font-medium text-[#8F7E6F] text-center">
          TM &amp; Copyright 2024 Burger King Corporation. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;

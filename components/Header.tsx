import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center h-14 bg-amazon_blue">
        {/* logo */}
        <div className="mx-5 grow sm:grow-0">
          <Image
            src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38663/preview.svg"
            alt="logo"
            width={40}
            height={50}
            className="object-contain cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="items-center flex-grow hidden h-10 bg-yellow-500 rounded-md sm:flex ">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow h-full p-2 outline-none rounded-l-md"
          />
          <MagnifyingGlassIcon className="p-4 h-14" />
        </div>

        {/* Cart */}
        <div className="flex items-center mx-6 space-x-6 text-xs text-white">
          <div className="font-extrabold navlink whitespace-nowrap">
            <p>Hello, Luben</p>
            <p>Accounts & Lists</p>
          </div>
          <div className="font-extrabold navlink whitespace-nowrap">
            <p>Return </p>
            <p>& Orders</p>
          </div>
          <div className="relative flex items-center font-extrabold navlink">
            <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10">
              4
            </span>
            <ShoppingCartIcon className="h-8" />
            <p className="hidden mt-2 md:inline">Basket</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

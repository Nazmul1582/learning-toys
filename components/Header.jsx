import { ShoppingCart, UserRoundArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-linear-to-r from-cyan-600 to-emerald-600 text-white text-center px-4 py-2">
        <p>
          আমাদের যে কোন পণ্য অর্ডার করতে কল করুন{" "}
          <a href="tel:01321143469" className="text-yellow-300 font-bold">
            01321143469
          </a>
        </p>
      </div>
      <nav className="bg-[#111d41]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center gap-10">
            <div></div>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={120} height={48} />
            </Link>
            <div className="flex items-center gap-10">
              <Link
                className="text-white hover:text-emerald-400 transition-colors"
                href="/cart"
              >
                <ShoppingCart size={30} />
              </Link>
              <Link
                className="text-white hover:text-emerald-400 transition-colors"
                href="/login"
              >
                <UserRoundArrowLeft size={30} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

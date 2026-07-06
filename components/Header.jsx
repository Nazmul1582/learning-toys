import React from "react";

export default function Header() {
  return (
    <div className="bg-linear-to-r from-cyan-600 to-emerald-600 text-white text-center px-4 py-2">
      <p>
        আমাদের যে কোন পণ্য অর্ডার করতে কল করুন{" "}
        <a href="tel:01321143469" className="text-yellow-300 font-bold">
          01321143469
        </a>
      </p>
    </div>
  );
}

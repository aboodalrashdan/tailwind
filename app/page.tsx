import React from "react";
import ProductsPage from "./products/page";
import { HeadSection } from "./components/HeadSection";
import { CleanSection } from "./components/CleanSection";

export default function HomePage() {
  return (
    <div className="flex items-center flex-col gap-0">
      <HeadSection />
      <ProductsPage />
      <CleanSection />
    </div>
  );
}

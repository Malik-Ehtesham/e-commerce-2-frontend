import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ProductsSection from "../ProductsSection/ProductsSection";
import Toolbar from "../Toolbar/Toolbar";

import {
  fetchProductsByCategory,
  setCategory,
} from "@/store/features/products/productsSlice";

const AccessoriesSection = () => {
  // -----VARIABLES DECLARATION------
  const dispatch = useDispatch();

  // -------USE STATES----------
  const [scrolled, setScrolled] = useState(false);

  // --------USE EFFECTS------------

  useEffect(() => {
    dispatch(fetchProductsByCategory({ category: "accessories" }));
    dispatch(setCategory("accessories"));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen">
      <Banner />
      <div className={`z-10 ${scrolled ? "w-screen fixed top-0" : ""}`}>
        <Header />
        <Toolbar />
      </div>
      <ProductsSection />
    </div>
  );
};

export default AccessoriesSection;

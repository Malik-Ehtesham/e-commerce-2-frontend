import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import CartDrawer from "../CartDrawer/CartDrawer";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/shadcn-components/ui/sheet";
import { X } from "lucide-react";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Logo from "../../assets/Images/Logos/main-logo-3.png";

const SideDrawer = () => {
  return (
    <Sheet>
      <div className="flex justify-between items-center w-screen bg-white px-2">
        <div className="w-44 flex justify-start items-center ">
          <SheetTrigger>
            <MenuIcon fontSize="large" />
          </SheetTrigger>
        </div>
        <Link to="/" className="w-44 h-14 ">
          <img src={Logo} className="w-full h-full" />
        </Link>
        <div className="w-44 flex justify-end items-center">
          <span className="max-[500px]:hidden mb-0.5 ">
            <PersonIcon className="mx-1  cursor-pointer transition ease-in-out  hover:translate-z-2 hover:scale-110   duration-300  " />
          </span>

          <SearchBar />
          <CartDrawer />
        </div>
      </div>
      <SheetContent side="left" className="w-80">
        <SheetHeader></SheetHeader>
        <ul className="w-full flex flex-col justify-center items-center mt-2">
          <li className="border-b-2 border-neutral-300 w-full my-4  ">
            <SheetClose asChild>
              <Link
                to="/collections/men"
                className="font-semibold flex justify-between  "
              >
                MEN
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>
          <li className="border-b-2 border-neutral-300 w-full  my-4">
            <SheetClose asChild>
              <Link
                to="/collections/women"
                className="font-semibold flex justify-between  "
              >
                WOMEN
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>{" "}
          <li className="border-b-2 border-neutral-300 w-full  my-4">
            <SheetClose asChild>
              <Link
                to="/collections/kids"
                className="font-semibold flex justify-between  "
              >
                KIDS
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>{" "}
          <li className="border-b-2 border-neutral-300 w-full  my-4 ">
            <SheetClose asChild>
              <Link
                to="/collections/accessories"
                className="font-semibold flex justify-between  "
              >
                ACCESSORIES
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>
          <li className="border-b-2 border-neutral-300 w-full  my-4 min-[500px]:hidden">
            <SheetClose asChild>
              <Link
                to="/account"
                className="font-semibold flex justify-between  "
              >
                ACCOUNT
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>
        </ul>
        <SheetClose className="absolute right-4 top-4  rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
          <X className="h-4 w-4  " />
          <span className="sr-only   ">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawer;

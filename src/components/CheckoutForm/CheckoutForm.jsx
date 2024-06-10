import { Button } from "@/shadcn-components/ui/button";
import { Input } from "@/shadcn-components/ui/input";
import { Label } from "@/shadcn-components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shadcn-components/ui/radio-group";
// import { Select } from "@/shadcn-components/ui/select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shadcn-components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";
import { Separator } from "@/shadcn-components/ui/separator";
import CheckoutProductCard from "../CheckoutProductCard/CheckoutProductCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/features/auth/authSlice";
import { Link } from "react-router-dom";
import AddAddressFormDialog from "../AddAddressFormDialog/AddAddressFormDialog";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address);
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(token);

  const logoutHandler = () => {
    dispatch(logout());
    setIsLoggedIn(false);
  };
  return (
    <div className="flex justify-center lg:justify-end">
      <form className="col-span-1 p-6   w-full md:w-5/6 xl:w-4/5  2xl:w-2/3">
        {isLoggedIn ? (
          <>
            <Accordion
              type="single"
              collapsible
              className="border-b border-gray-400  "
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-gray-700 flex items-start   ">
                  <div className="flex flex-col items-start">
                    <p className="text-gray-500 font-semibold text-sm">
                      Account
                    </p>
                    <p className="text-sm mt-3     no-underline">
                      shamimalick321@gmail.com
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  <p
                    className="text-blue-400 text-sm cursor-pointer"
                    onClick={logoutHandler}
                  >
                    Logout
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Select>
              <SelectTrigger className="w-full flex justify-between mt-3 outline-none">
                <div className="flex justify-start flex-col items-start  tracking-normal">
                  <p className=" text-gray-500 font-semibold text-sm my-2">
                    Ship to
                  </p>
                  <SelectValue
                    // placeholder={`${address.primaryAddress.firstName} ${address.primaryAddress.lastName}, ${address.primaryAddress.address}, ${address.primaryAddress.city} ${address.primaryAddress.zipcode}, ${address.primaryAddress.phoneNumber}`}
                    placeholder="Select Address"
                  />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Address</SelectLabel>
                  {address.addresses.map((address) => {
                    return (
                      <SelectItem
                        key={address._id}
                        value={address._id}
                        className="tracking-normal"
                      >
                        {address.firstName} {address.lastName},{" "}
                        {address.address}, {address.city} {address.zipcode},{" "}
                        {address.phoneNumber}
                      </SelectItem>
                    );
                  })}
                  <div className="px-6 py-1.5">
                    <AddAddressFormDialog
                      page="checkout"
                      // className="px-4 py-2"
                    />
                  </div>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* <Accordion
              type="single"
              collapsible
              className="border-b border-gray-400  "
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg text-gray-700 flex items-start   ">
                  <div className="flex flex-col items-start">
                    <p className="text-gray-500 font-semibold text-sm">
                      Ship to
                    </p>
                    <p className="text-sm mt-3 tracking-wide    no-underline">
                      <span className="me-1">
                        {address.primaryAddress.firstName}
                      </span>
                      <span className="me-1">
                        {address.primaryAddress.lastName},
                      </span>
                      <span className="me-1">
                        {address.primaryAddress.address},
                      </span>

                      <span className="me-1">
                        {address.primaryAddress.city}
                      </span>
                      <span className="me-1">
                        {address.primaryAddress.zipcode},
                      </span>
                      <span className="me-1">
                        {address.primaryAddress.phoneNumber}
                      </span>
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  <p className="text-blue-400 text-sm" onClick={logoutHandler}>
                    Logout
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}
          </>
        ) : (
          <div>
            <div className="my-2 flex justify-between ">
              <p className="font-semibold text-2xl">Contact</p>
              <Link to="/account/signin">Login</Link>
            </div>
            <input
              placeholder="Email"
              className="border border-gray-400  rounded-md p-2.5 mb-2 w-full "
            />
            <Separator orientation="horizontal" className="my-6" />
            <p className="font-semibold text-2xl my-3">Delivery</p>
            <div className="flex">
              <input
                placeholder="First Name"
                className="border border-gray-400    rounded-md p-2.5 mb-6 w-full me-2"
              />
              <input
                placeholder="Last Name"
                className="border border-gray-400  rounded-md p-2.5 mb-6 w-full ms-2"
              />
            </div>
            <input
              placeholder="Address"
              className="border border-gray-400  rounded-md p-2.5 mb-6  w-full"
            />
            <input
              placeholder="Apartment, suite, etc(optional)"
              className="border border-gray-400  rounded-md p-2.5 mb-6  w-full"
            />
            <div className="flex">
              <input
                placeholder="City"
                className="border border-gray-400  rounded-md p-2.5 mb-6 w-full me-2"
              />
              <input
                placeholder="Postal Code"
                className="border border-gray-400  rounded-md p-2.5 mb-6 w-full ms-2"
              />
            </div>
            <input
              placeholder="Phone Number"
              className="border border-gray-400  rounded-md p-2.5 mb-6 w-full "
            />
          </div>
        )}
        <Separator orientation="horizontal" className="my-6" />
        <div>
          <p className="font-semibold text-2xl">Payment</p>
          <p className="text-sm text-gray-400">
            All transactions are secure and encrypted.
          </p>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2 py-3 cursor-pointer  text-lg border-b border-gray-400 ">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one" className="text-lg cursor-pointer">
                Debit - Credit Card
              </Label>
            </div>
            <div className="flex items-center space-x-2 py-3 cursor-pointer  text-lg border-b border-gray-400 ">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two" className="text-lg cursor-pointer">
                Cash On Delivery
              </Label>
            </div>
          </RadioGroup>
        </div>
        {/* <Separator orientation="horizontal" className="my-6" /> */}
        {/* <p>ORDER</p> */}
        <div className="my-2 flex justify-between mt-8 lg:hidden">
          <p className="font-semibold text-2xl">Total</p>
          <p className="font-semibold text-xl">Rs. 6,850.00</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="border-y border-gray-400  lg:hidden"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-gray-700 ">
              <p className="flex items-center font-bold">ORDER SUMMARY(2)</p>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <CheckoutProductCard />
              <CheckoutProductCard /> <CheckoutProductCard />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button className="w-full my-8">PAY NOW</Button>
      </form>
    </div>
  );
};

export default CheckoutForm;

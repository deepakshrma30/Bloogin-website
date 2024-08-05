import { Button, TextField } from "@radix-ui/themes";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white  shadow mt-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6 hover:font-bold hover:text-black">
              About
            </a>
          </li>
          
          <li>
            <a href="#" className="hover:underline hover:font-bold hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 mt-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-4">
          <TextField.Root
            type="email"
            placeholder="name@gmail.com"
            
          />
          <Button style={{cursor:"pointer"}}  variant="solid" color="gray" highContrast  type="submit">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { Button } from "@heroui/react";
import { Link } from "@heroui/react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import { ChevronDown, ChevronRight, Languages, Box, Users } from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      isBlurred={false}
      className="fixed bg-gradient-to-b from-white dark:from-black to-transparent"
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src="https://maxlineglobal.com/favicon.ico?63c3c9d72566a70f"
              alt="Logo"
              height={40}
              width={40}
              className="brightness-125 shadow-blue-500/50 drop-shadow-lg"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-8" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.label}>
            {item.isDropdown ? (
              <Popover placement="bottom" offset={20} showArrow backdrop="blur">
                <PopoverTrigger>
                  <button className="flex items-center gap-1 text-foreground hover:text-blue-400 transition-colors font-medium">
                    {item.label} <ChevronDown size={16} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="p-0 border border-white/10 bg-black/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
                  {item.label === "Company" ? <CompanyMenu /> : <ServicesMenu />}
                </PopoverContent>
              </Popover>
            ) : (
              <NextLink className="text-foreground hover:text-blue-400 font-medium transition-colors" href={item.href || "#"}>
                {item.label}
              </NextLink>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        <div className="hidden md:flex gap-4 items-center">
          <Select
            className="w-32"
            size="sm"
            defaultSelectedKeys={["en"]}
            variant="flat"
            startContent={<Languages size={16} />}
          >
            <SelectItem key="en">English</SelectItem>
            <SelectItem key="ar">Arabic</SelectItem>
          </Select>
          <ThemeSwitch />
          <Button
            as={Link}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full px-6 shadow-lg shadow-blue-600/20"
            href="/quote"
            endContent={<ChevronRight size={18} />}
          >
            Get a Quote
          </Button>
        </div>
        <NavbarMenuToggle className="lg:hidden" />
      </NavbarContent>
    </HeroUINavbar>
  );
};


// --- Sub-components for Dropdowns ---

function CompanyMenu() {
  return (
    <div className="w-[300px] p-4 flex flex-col gap-2">
      {siteConfig.companyMenu.map((item) => (
        <Link key={item.label} href={item.href} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all">
          <div className="mt-1 p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 text-blue-400">
            {item.label.includes("About") ? <Box size={18} /> : <Users size={18} />}
          </div>
          <div>
            <p className="text-white font-medium text-sm">{item.label}</p>
            <p className="text-gray-500 text-xs mt-1 leading-tight">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ServicesMenu() {
  return (
    <div className="w-[450px] p-6 grid grid-cols-2 gap-4">
      {siteConfig.servicesMenu.map((item) => (
        <Link key={item.label} href={item.href} className="flex flex-col p-3 rounded-xl hover:bg-white/5 transition-all group">
          <span className="text-white group-hover:text-blue-400 text-sm font-semibold transition-colors">
            {item.label}
          </span>
          <span className="text-gray-500 text-xs">Standard Freight & Logistics</span>
        </Link>
      ))}
      <div className="col-span-2 mt-2 pt-4 border-t border-white/5">
        <Button size="sm" variant="light" color="primary" className="w-full justify-between">
          View All Specialized Services <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
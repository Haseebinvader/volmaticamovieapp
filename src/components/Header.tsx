// src/components/Header.tsx
"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"; 
import navbarItems from "@/Data";
import { NavItem } from "@/lib/Types/navItems";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🎬 MovieVerse</h1>
        <NavigationMenu>
          <NavigationMenuList>
            {navbarItems.map((item: NavItem) => (
              <NavigationMenuItem key={item.name}>
                {item.dropdown && item.items ? (
                  <>
                    <NavigationMenuTrigger className="text-black hover:text-black">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="min-w-[200px] rounded-md bg-gray-800 p-2 shadow-lg">
                        {item.items.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.path}
                                className="block px-4 py-2 rounded hover:bg-gray-700 text-white"
                              >
                                {subItem.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.path ?? "#"}
                      className="text-white px-4 py-2 hover:text-black"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </header>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItems from "../NavItems";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

type MyComponentProps = {
  setParams: React.Dispatch<React.SetStateAction<string>>;
  data: any
};

export default function Header({ setParams, data }: MyComponentProps) {
  return (
    <header className="top-0 flex h-16 items-center gap-4 bg-[rgba(86,44,44,0.7)] px-4 md:px-6 w-full fixed z-[99] pt-[2.3rem] pb-[2.3rem]">
      <div className="flex items-center w-full justify-center">
        <div className="logo mr-[8.9rem] ">
          <img src="./images/LOGOSAMPLE.png" alt="" />
        </div>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <NavItems data={data} className="text-muted-foreground transition-colors hover:text-foreground flex-shrink-0" />
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden border-[0rem]"
            >
              <Menu style={{ width: "3.6rem", height: "3.6rem" }} />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="sr-only">
              <SheetTitle />
              <SheetDescription />
            </SheetHeader>
            <nav className="grid gap-6 text-lg font-medium">
              <NavItems data={data} className="text-muted-foreground transition-colors hover:text-foreground" />
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden flex-col right-header md:flex md:flex-row ">
          <img className="mr-[1.6rem]" src="./images/Mountains.svg" alt="" />
          <img
            className="mr-[1.6rem]"
            src="./images/Fishing-icon-32px.svg"
            alt=""
          />
          <img className="mr-[1.6rem]" src="./images/Crosshair.svg" alt="" />

          <nav className="navbar">
            <a href="" />
            <select
              className="language-selector"
              onChange={(e) => setParams(e.target.value)}
            >
              <option value="en" selected>
                <div> EN </div>
              </option>
              <option value="fr">FR</option>
            </select>
          </nav>
        </div>
      </div>
    </header>
  );
}

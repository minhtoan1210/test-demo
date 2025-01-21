/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Món ăn",
    href: "/menu",
  },
  {
    title: "Đơn hàng",
    href: "/orders",
  },
  {
    title: "Đăng nhập",
    href: "/login",
    authRequired: false,
  },
  {
    title: "Quản lý",
    href: "/manage/dashboard",
    authRequired: true,
  },
];

export default function NavItems({ className, data }: { className?: string, data:any }) {

  console.log("data", data)

  return data?.banner_menu.map((item:any,index: any) => {
    return (
      <Link to={""} key={index} className={cn('text-[1.6rem] mr-[2.4rem] font-medium ',className)}>
        <span className="text-[white]">{item}</span>
      </Link>
    );
  });
}

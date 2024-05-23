"use client";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  PhoneCall,
  MapPin,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FloatActionButton = () => {
  return (
    <div className="fixed top-[88%] left-[5%]  z-30">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-4 bg-primary">
            <PhoneCall /> تماس
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="text-center text-primary">
            راه های ارتباطی{" "}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="space-x-4 justify-end">
              <span className="text-red-600">تماس سریع</span>
              <PhoneCall className="mr-2 h-6 w-6" />
            </DropdownMenuItem>
            <DropdownMenuItem className="space-x-2 justify-end">
              <span className="text-primary">دریافت مشاوره واتسپ</span>
              <FaWhatsapp className="mr-2 h-6 w-6" />
            </DropdownMenuItem>
            <DropdownMenuItem className="space-x-2 justify-end">
              <span className="text-primary">دریافت نوبت آنلاین</span>
              <Plus className="mr-2 h-6 w-6" />
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="h-8">
            <DropdownMenuLabel className="text-center text-primary">
              *----*-----*----*
            </DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <div className="flex items-center justify-end space-x-1">
            <DropdownMenuLabel className="text-center text-primary text-[8px]">
              روز کاری تهران : شنبه - یکشنبه - دوشنبه
            </DropdownMenuLabel>
            <span className="text-[10px] text-right"></span>
            <MapPin className="mr-2 h-4 w-4" />
          </div>
          <div className="flex items-center justify-end space-x-1">
            <DropdownMenuLabel className="text-center text-primary text-[8px]">
              روز کاری قزوین : سه شنبه ها
            </DropdownMenuLabel>
            <span className="text-[10px] text-right"></span>
            <MapPin className="mr-2 h-4 w-4" />
          </div>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FloatActionButton;

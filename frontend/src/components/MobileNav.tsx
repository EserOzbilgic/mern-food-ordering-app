import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  // Örneğin, kullanıcının oturum açıp açmadığını belirlemek için basit bir değişken
  const isLoggedIn = false;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu className="text-orange-500" />
        </Button>
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isLoggedIn ? (
            <span>Welcome back, User!</span>
          ) : (
            <span>Welcome to MernEats.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isLoggedIn ? (
            <Button className="flex-1 font-bold bg-orange-500">
              Log Out
            </Button>
          ) : (
            <Button className="flex-1 font-bold bg-orange-500">
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

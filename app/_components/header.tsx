import Image from "next/image";
import { Card } from "@radix-ui/themes";
import { CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row bg-[#221C29]">
                <Image src="/logo.png" alt="FSW" height={40} width={150} />
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <MenuIcon size={16} />
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;

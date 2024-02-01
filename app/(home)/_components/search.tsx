"use client"

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";


const Search = () => {
    return ( 
        <div className="flex item-center pt-5 gap-2">
            <Input placeholder="Busque uma barbearia..." />
            <Button variant="default" size="icon">
                <SearchIcon size={18} />
            </Button>
        </div>
     );
}
 
export default Search;
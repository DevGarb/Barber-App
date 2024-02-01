import { Card } from "./card";
import { Badge } from "./badge";
import { CardContent } from "./card";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";


const BookingItem = () => {
    return (
        <Card>
            <CardContent className="flex justify-between p-5 py-0">
                <div className="flex flex-col gap-2 py-5">
                    <Badge className="bg-[#221C30] text-primary hover:bg-[#221c39] w-fit">Confirmado</Badge>
                    <h2 className="font-bold">Corte de Cabelo</h2>

                    <div className="flex gap-2">
                        <Avatar className="h-7 w-7">
                            <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
                        </Avatar>

                        <h3 className="text-sm">Vintage Barber</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-3">
                    <p className="text-sm">Fevereiro</p>
                    <p className="text-2xl">06</p>
                    <p  className="text-sm">19:45</p>

                </div>

            </CardContent>
        </Card>
    );
}

export default BookingItem;
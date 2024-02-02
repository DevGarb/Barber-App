import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import Search from "./_components/search";
import BookingItem from "../_components/ui/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
    //chamar prisma e pegar db barbearias
    const barbershops = await db.barbershop.findMany({})

    return (
        <div>
            <Header />

            <div className="px-5 pt-5">
                <h2 className="text-xl font-bold">Olá, Gabriel!</h2>
                <p className="capitalize text-sm">
                    {format(new Date(), "EEEE',' dd 'de ' MMMM ", {
                        locale: ptBR,
                    })}
                </p>
            </div>

            <div className="px-5 mt-6">
                <Search />
            </div>

            <div className="px-5 mt-6">
                <h2 className="text-xs uppercase text-gray-500 font-bold mb-3">Agendamentos</h2>
                <BookingItem />
            </div>

            <div className="mt-6">
                <h2 className="px-5 mb-3 text-xs uppercase text-gray-500 font-bold">Agendamentos</h2>

                <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                    {barbershops.map((barbershop) => (
                        <BarbershopItem key={barbershop.id} barbershop={barbershop} />
                    ))}
                </div>
            </div>

            <div className="mt-6 mb-[4.5rem]">
                <h2 className="px-5 mb-3 text-xs uppercase text-gray-500 font-bold">Populares</h2>

                <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                    {barbershops.map((barbershop) => (
                        <BarbershopItem key={barbershop.id} barbershop={barbershop} />
                    ))}
                </div>
            </div>
        </div>
    )
}

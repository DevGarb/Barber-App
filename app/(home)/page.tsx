import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import Search from "./_components/search";
import BookingItem from "../_components/ui/booking-item";

export default function Home() {
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
        </div>
    )
}
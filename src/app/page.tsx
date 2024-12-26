import Image from "next/image";
import Link from "next/link";
import Guadalupe from '@/assets/Guadalupe.svg';
import Navbar from "./components/navBar";


export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="m-7 flex flex-col items-center">

        <div className="mt-10">
          <Image src={Guadalupe} alt="Guadalupe Mary" width={350} priority />
        </div>


        <div className="mt-5 font-katibeh text-center">
          <h1 className="text-6xl text-brand-500 leading-tight">
            Não sabe o que
            <br />
            <span className="text-brand-900">confessar?</span>
            <br />
            <span className="text-brand-500 text-5xl">Nós te ajudamos</span>
          </h1>
        </div>


        <div className="p-4 text-center mt-5 max-w-2xl">
          <p className="text-brand-900 font-roboto text-lg">
            Este aplicativo foi desenvolvido para auxiliar os fiéis na preparação para o sacramento da confissão.
            As perguntas são cuidadosamente elaboradas com base nos mandamentos e nas orientações da Igreja.
          </p>
        </div>


        <div className="mt-5">
          <Link href="/commandments" className="bg-brand-500 hover:bg-brand-600 transition text-white text-xl font-semibold px-8 py-4 rounded-xl shadow-md">
            Montar confissão
          </Link>
        </div>
      </div>
    </main>
  );
}


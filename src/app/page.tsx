import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white h-full w-full">
      <div className="flex flex-col items-center h-full">
      <div id="holy" className="mt-10">
          <Image src="/assets/images/holymaryofguadalupe.svg" alt="Holy Mary of Guadalupe" width={400} height={400} />
        </div>
        <div id="title" className="mt-10">
          <h1 className="text-roman-light-red text-2xl font-bold mb-5 text-center shadow-black">
            Não sabe como fazer sua <br />confissão? <br />Nós te ajudamos.
          </h1>
        </div>
        <div id="alert" className="text-black mb-5 pr-5 pl-5 max-w-md rounded-xl text-center font-medium leading-4">
          <p>Este aplicativo foi desenvolvido para auxiliar os fiéis na preparação para o sacramento da confissão. As perguntas são cuidadosamente elaboradas com base nos mandamentos e nas orientações da Igreja, evitando qualquer linguagem inapropriada, e incluem referências aos ensinamentos dos santos para oferecer um direcionamento espiritual.</p>
          <br />
          <p>Após a reflexão, é possível gerar um PDF com a confissão organizada de forma prática e acessível para ser apresentada ao confessor.</p>
          <br />
          <p>Reforçamos que nenhum dado do usuário é armazenado, garantindo total anonimato e segurança.</p>
        </div>
        <div id="button" className="w-2/3 flex flex-col items-center justify-center text-center">
          <Link href="/initial-questions" className="bg-roman-light-red hover:bg-roman-dark-red ease-in duration-150 text-white hover:text-roman-gray text-md font-medium h-20 w-full rounded-2xl flex flex-col items-center justify-center">
          Fazer exame de consicência
          </Link>
        </div>
       
      </div>
    </div>

  );
}

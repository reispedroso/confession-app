import Image from "next/image";
import Guadalupe from "@/assets/Guadalupe.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="flex justify-center">
          <Image src={Guadalupe} alt="Guadalupe Mary" width={200} priority />
        </div>
        <div className="space-y-4 text-zinc-400">
          <p className="text-lg text-zinc-300">
            Este assistente foi desenvolvido para ajudar na preparação para uma
            boa confissão católica, baseado nos mandamentos da Lei de Deus e da
            Igreja.
          </p>
          <p className="pt-2 font-medium text-zinc-100">Nota Importante:</p>
          <p>
            As frases e opções apresentadas neste formulário foram revisadas e
            correspondem a ações que, de acordo com o Catecismo da Igreja
            Católica e a doutrina moral, constituem matéria de pecado mortal
            quando cometidas com pleno conhecimento e consentimento deliberado.
          </p>
          <p>
            Isto não é uma opinião dos desenvolvedores, mas uma compilação de
            princípios morais estabelecidos. A finalidade é auxiliar a memória,
            não substituir a formação da consciência ou o diálogo com o confessor.
          </p>
          <p className="border-t border-zinc-700 pt-4 font-semibold text-zinc-100">
            Reflita com seriedade. Não adianta fazer birra ou buscar
            justificativas: se você o fez, é pecado e precisa ser confessado.
          </p>
        </div>
        <Link
          href="/new-confession"
          className="inline-flex h-12 w-full items-center justify-center rounded-md bg-red-800 px-6 text-base font-medium text-white shadow-lg transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          Iniciar Exame de Consciência
        </Link>
      </div>
    </main>
  );
}
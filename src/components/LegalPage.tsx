import Link from "next/link";
import type { ReactNode } from "react";
import { EMPRESA } from "@/lib/empresa";

export default function LegalPage({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <>
      <header className="bg-ink text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5" aria-label="Principal">
          <Link href="/" className="font-display text-xl font-bold tracking-tight">
            Data AS
          </Link>
          <Link href="/" className="text-sm text-[#c9d5e2] hover:text-white">
            Voltar ao site
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <article className="legal mx-auto max-w-3xl px-5 py-14 md:py-20">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{titulo}</h1>
          <p className="mt-4 text-slate">Última atualização: {EMPRESA.atualizadoEm}</p>
          {children}
        </article>
      </main>
      <footer className="border-t border-ink/10 text-sm text-slate">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-x-6 gap-y-2 px-5 py-8">
          <Link className="hover:text-ink" href="/privacidade">Política de Privacidade</Link>
          <Link className="hover:text-ink" href="/termos">Termos de Serviço</Link>
          <Link className="hover:text-ink" href="/exclusao-de-dados">Exclusão de dados</Link>
          <p className="w-full">
            {EMPRESA.razaoSocial} · CNPJ {EMPRESA.cnpj}
          </p>
        </div>
      </footer>
    </>
  );
}

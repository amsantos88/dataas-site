import Pipeline from "@/components/Pipeline";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { EMAIL, EMAIL_URL, WHATSAPP_EXIBICAO, WHATSAPP_URL } from "@/lib/contato";
import { EMPRESA } from "@/lib/empresa";

const problemas = [
  "Relatórios montados à mão, toda semana, em planilhas que só uma pessoa entende.",
  "Cada área tem um número diferente para a mesma pergunta.",
  "Dados presos no ERP, no CRM e em sistemas que não conversam entre si.",
  "Dashboards que ninguém usa porque ninguém confia nos dados por trás deles.",
];

const etapas = [
  {
    titulo: "Diagnóstico",
    texto: "Entendemos as decisões que sua empresa precisa tomar e mapeamos de onde vêm os dados.",
  },
  {
    titulo: "Engenharia",
    texto: "Construímos pipelines que coletam, limpam e atualizam os dados automaticamente.",
  },
  {
    titulo: "Modelagem",
    texto: "Organizamos tudo em um data warehouse com regras de negócio claras e documentadas.",
  },
  {
    titulo: "BI",
    texto: "Entregamos dashboards feitos para quem decide, com indicadores que batem.",
  },
  {
    titulo: "Sustentação",
    texto: "Acompanhamos, monitoramos e evoluímos a solução junto com o seu negócio.",
  },
];

const servicos = [
  {
    titulo: "Engenharia de dados",
    texto: "Integração de ERPs, CRMs, APIs e planilhas em pipelines automatizados e monitorados.",
  },
  {
    titulo: "Data warehouse e modelagem",
    texto: "Uma base única e confiável, modelada para responder às perguntas do negócio.",
  },
  {
    titulo: "BI e dashboards",
    texto: "Power BI e outras ferramentas, com painéis claros para diretoria, gestores e operação.",
  },
  {
    titulo: "Consultoria e governança",
    texto: "Estratégia de dados, definição de indicadores, qualidade e boas práticas para o time.",
  },
];

function BotaoWhatsApp({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 font-semibold text-ink transition-colors hover:bg-signal-dark ${className}`}
    >
      <WhatsAppIcon />
      Conversar no WhatsApp
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="bg-ink text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5" aria-label="Principal">
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            Data AS
          </a>
          <ul className="hidden gap-8 text-sm text-[#c9d5e2] md:flex">
            <li><a className="hover:text-white" href="#processo">Como trabalhamos</a></li>
            <li><a className="hover:text-white" href="#servicos">Serviços</a></li>
            <li><a className="hover:text-white" href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ink text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.05fr_1fr] md:pb-28 md:pt-16">
            <div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Seus dados, do início ao fim.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#c9d5e2]">
                Da coleta nas fontes até o dashboard na mesa da diretoria. A Data AS cuida de todo
                o processo de dados da sua empresa: engenharia, data warehouse e BI, com um só
                parceiro responsável pelo resultado.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <BotaoWhatsApp />
                <a href="#processo" className="px-2 py-3 font-semibold text-white underline-offset-4 hover:underline">
                  Ver como trabalhamos
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-lg">
              <Pipeline />
            </div>
          </div>
        </section>

        {/* Problemas */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Sua empresa tem dados. O difícil é confiar neles.
            </h2>
            <ul className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
              {problemas.map((p) => (
                <li key={p} className="flex gap-4 border-t border-ink/15 pt-5 text-lg leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-signal" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Processo */}
        <section id="processo" className="scroll-mt-4">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Como trabalhamos
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
              Cinco etapas, uma única equipe. Você não precisa coordenar fornecedores diferentes
              para a engenharia, o banco de dados e os relatórios.
            </p>
            <ol className="mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
              {etapas.map((e, i) => (
                <li key={e.titulo} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display font-bold text-signal">
                      {i + 1}
                    </span>
                    {i < etapas.length - 1 && (
                      <span aria-hidden="true" className="hidden h-0.5 flex-1 bg-flow/40 md:block" />
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{e.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-slate">{e.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="scroll-mt-4 bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Serviços</h2>
            <dl className="mt-12 grid gap-x-16 md:grid-cols-2">
              {servicos.map((s) => (
                <div key={s.titulo} className="border-t-2 border-ink py-7">
                  <dt className="font-display text-2xl font-bold">{s.titulo}</dt>
                  <dd className="mt-3 max-w-md text-lg leading-relaxed text-slate">{s.texto}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Por que */}
        <section>
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:py-24">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Um parceiro para o processo inteiro
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate">
              <p>
                Quando a engenharia é feita por um fornecedor e o BI por outro, os problemas caem
                no meio do caminho e ninguém responde por eles.
              </p>
              <p>
                Na Data AS, quem constrói o pipeline é quem entrega o dashboard. Por isso
                conhecemos cada número de ponta a ponta, e você tem um único contato responsável
                pelo resultado.
              </p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-4 bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Vamos conversar sobre os seus dados?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#c9d5e2]">
              Conte o que sua empresa precisa. Respondemos rápido e, se fizer sentido, marcamos
              um diagnóstico inicial.
            </p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <BotaoWhatsApp />
              <a href={EMAIL_URL} className="font-semibold text-white underline underline-offset-4 hover:text-signal">
                {EMAIL}
              </a>
            </div>
            <p className="mt-6 text-sm text-[#8fa6be]">WhatsApp: {WHATSAPP_EXIBICAO}</p>
          </div>
        </section>
      </main>

      <footer className="bg-ink border-t border-white/10 text-sm text-[#8fa6be]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 pb-24 lg:flex-row lg:justify-between lg:pb-8 lg:pr-24">
          <div className="space-y-1">
            <p>© 2026 Data AS. Consultoria de dados.</p>
            <p>{EMPRESA.razaoSocial}</p>
            <p>CNPJ {EMPRESA.cnpj}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/privacidade" className="hover:text-white">Política de Privacidade</a>
            <a href="/termos" className="hover:text-white">Termos de Serviço</a>
            <a href="/exclusao-de-dados" className="hover:text-white">Exclusão de dados</a>
            <a href={EMAIL_URL} className="hover:text-white">{EMAIL}</a>
          </div>
        </div>
      </footer>

      {/* Botão flutuante */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}

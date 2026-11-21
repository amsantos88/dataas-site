import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { EMPRESA } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Termos de Serviço | Data AS",
  description:
    "Condições de uso do site e dos serviços da Data AS, incluindo soluções que utilizam a WhatsApp Business Platform.",
};

const E = EMPRESA;

export default function Termos() {
  return (
    <LegalPage titulo="Termos de Serviço">
      <p>
        Estes Termos de Serviço regulam o uso do site {E.site} e dos aplicativos e serviços
        oferecidos pela {E.nome} ({E.razaoSocial}, CNPJ {E.cnpj}, com sede em {E.endereco}),
        doravante “Data AS” ou “nós”, incluindo as soluções que utilizam a WhatsApp Business
        Platform. Ao usar nossos serviços ou conversar com um número operado pela Data AS, você
        concorda com estes Termos e com a nossa{" "}
        <Link href="/privacidade">Política de Privacidade</Link>.
      </p>

      <h2>1. Os serviços</h2>
      <p>
        A Data AS presta consultoria de dados de ponta a ponta: engenharia de dados, data
        warehouse, business intelligence e automações. Algumas soluções usam a API do WhatsApp
        Business para atendimento, envio de notificações, alertas e relatórios.
      </p>

      <h2>2. Uso do WhatsApp</h2>
      <ul>
        <li>
          Mensagens iniciadas pela empresa só são enviadas a quem deu consentimento (opt-in) para
          recebê-las.
        </li>
        <li>
          Você pode parar de receber mensagens a qualquer momento respondendo “SAIR” ou “PARAR”, ou
          bloqueando o número no WhatsApp.
        </li>
        <li>
          Atendimentos automatizados (robôs) podem ser usados. Sempre que possível, oferecemos a
          opção de falar com uma pessoa.
        </li>
        <li>
          O uso do WhatsApp também está sujeito aos{" "}
          <a href="https://www.whatsapp.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer">
            Termos de Serviço do WhatsApp
          </a>{" "}
          e à{" "}
          <a href="https://business.whatsapp.com/policy" target="_blank" rel="noopener noreferrer">
            Política Comercial do WhatsApp Business
          </a>
          . A Data AS não controla e não responde pela disponibilidade da plataforma do WhatsApp.
        </li>
      </ul>

      <h2>3. Obrigações do usuário</h2>
      <p>Ao usar nossos serviços, você se compromete a não:</p>
      <ul>
        <li>enviar conteúdo ilegal, ofensivo, discriminatório, fraudulento ou enganoso;</li>
        <li>enviar spam, correntes ou mensagens em massa não solicitadas;</li>
        <li>
          enviar dados sensíveis, senhas ou dados completos de cartão de pagamento, a menos que
          seja expressamente solicitado por um canal seguro;
        </li>
        <li>tentar acessar sistemas sem autorização, explorar falhas ou atrapalhar o serviço;</li>
        <li>usar o serviço para violar direitos de terceiros ou as políticas da Meta e do WhatsApp.</li>
      </ul>

      <h2>4. Obrigações das empresas clientes</h2>
      <p>
        Quando a Data AS opera o WhatsApp em nome de uma empresa cliente, a empresa cliente é
        responsável por:
      </p>
      <ul>
        <li>obter e registrar o consentimento (opt-in) dos destinatários antes de enviar mensagens;</li>
        <li>respeitar imediatamente os pedidos de opt-out;</li>
        <li>
          cumprir a Política Comercial do WhatsApp Business, incluindo a lista de produtos e
          serviços proibidos;
        </li>
        <li>ter base legal adequada, segundo a LGPD, para os dados que fornecer à Data AS;</li>
        <li>a veracidade do conteúdo dos modelos (templates) de mensagem que aprovar.</li>
      </ul>

      <h2>5. Propriedade intelectual</h2>
      <p>
        O site, a marca Data AS, os textos, layouts e o software desenvolvido pela Data AS são
        protegidos por lei. As marcas WhatsApp e Meta pertencem aos seus respectivos donos. Os
        direitos sobre entregas de projetos seguem o que estiver previsto no contrato com cada
        cliente.
      </p>

      <h2>6. Disponibilidade</h2>
      <p>
        Trabalhamos para manter os serviços disponíveis e seguros, mas eles podem passar por
        interrupções, manutenções ou falhas de terceiros (como provedores de nuvem e a plataforma
        do WhatsApp). Podemos alterar, suspender ou encerrar funcionalidades, avisando com
        antecedência quando possível.
      </p>

      <h2>7. Limitação de responsabilidade</h2>
      <p>
        Na máxima extensão permitida pela lei, a Data AS não responde por danos indiretos, lucros
        cessantes ou perdas decorrentes do mau uso dos serviços, de informações fornecidas por
        terceiros ou de indisponibilidade de plataformas de terceiros. Nada nestes Termos limita
        direitos garantidos pelo Código de Defesa do Consumidor quando ele for aplicável.
      </p>

      <h2>8. Suspensão</h2>
      <p>
        Podemos suspender ou encerrar o acesso de quem violar estes Termos, a lei ou as políticas
        da Meta e do WhatsApp.
      </p>

      <h2>9. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue a nossa{" "}
        <Link href="/privacidade">Política de Privacidade</Link>. Para pedir a exclusão dos seus
        dados, veja a página <Link href="/exclusao-de-dados">Exclusão de dados</Link>.
      </p>

      <h2>10. Alterações</h2>
      <p>
        Podemos atualizar estes Termos. A versão em vigor é sempre a publicada nesta página, com a
        data da última atualização no topo.
      </p>

      <h2>11. Lei aplicável e foro</h2>
      <p>
        Estes Termos seguem as leis brasileiras. Fica eleito o foro da comarca de {E.foro} para
        resolver eventuais conflitos, salvo quando a lei garantir ao consumidor o foro do seu
        domicílio.
      </p>

      <h2>12. Contato</h2>
      <p>
        Dúvidas sobre estes Termos:{" "}
        <a href={`mailto:${E.emailPrivacidade}`}>{E.emailPrivacidade}</a>.
      </p>
    </LegalPage>
  );
}

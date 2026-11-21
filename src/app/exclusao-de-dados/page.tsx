import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { EMPRESA } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Exclusão de dados | Data AS",
  description: "Como pedir a exclusão dos seus dados pessoais tratados pela Data AS.",
};

const E = EMPRESA;
const assunto = encodeURIComponent("Exclusão de dados");

export default function ExclusaoDeDados() {
  return (
    <LegalPage titulo="Exclusão de dados">
      <p>
        Você pode pedir a qualquer momento que a Data AS exclua os dados pessoais que temos sobre
        você, inclusive os dados de conversas pelo WhatsApp. Escolha uma das opções:
      </p>

      <h2>Opção 1: pelo WhatsApp</h2>
      <p>
        Na conversa com o nosso número, envie a mensagem <strong>“EXCLUIR MEUS DADOS”</strong>.
        Vamos confirmar o pedido pela própria conversa.
      </p>

      <h2>Opção 2: por e-mail</h2>
      <p>
        Envie um e-mail para{" "}
        <a href={`mailto:${E.emailPrivacidade}?subject=${assunto}`}>{E.emailPrivacidade}</a> com o
        assunto “Exclusão de dados” e informe:
      </p>
      <ul>
        <li>seu nome;</li>
        <li>o número de WhatsApp (com DDD) ou o e-mail usado no contato conosco.</li>
      </ul>

      <h2>O que acontece depois</h2>
      <ul>
        <li>
          Podemos pedir uma confirmação simples para garantir que o pedido foi feito pelo próprio
          titular dos dados.
        </li>
        <li>
          Excluímos ou anonimizamos seus dados em até 15 dias e avisamos você quando terminar.
        </li>
        <li>
          Alguns dados podem ser mantidos pelo prazo exigido por lei, por exemplo registros de
          acesso (Marco Civil da Internet) e documentos fiscais. Nesses casos, avisamos quais
          dados foram mantidos e por quê.
        </li>
        <li>
          Se os dados foram tratados em nome de uma empresa cliente, também repassamos o pedido a
          ela.
        </li>
      </ul>

      <h2>Mensagens guardadas no WhatsApp</h2>
      <p>
        As mensagens que ficam no seu próprio aparelho e os dados tratados diretamente pelo
        WhatsApp seguem a{" "}
        <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Política de Privacidade do WhatsApp
        </a>
        . Você pode apagá-las pelo próprio aplicativo.
      </p>

      <p>
        Mais detalhes na nossa <Link href="/privacidade">Política de Privacidade</Link>.
      </p>
    </LegalPage>
  );
}

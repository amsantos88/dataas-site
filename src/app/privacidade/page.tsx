import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { EMPRESA } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Política de Privacidade | Data AS",
  description:
    "Como a Data AS coleta, usa, compartilha e protege dados pessoais, inclusive em soluções que utilizam a WhatsApp Business Platform.",
};

const E = EMPRESA;

export default function Privacidade() {
  return (
    <LegalPage titulo="Política de Privacidade">
      <p>
        Esta Política de Privacidade explica como a {E.nome} ({E.razaoSocial}, CNPJ {E.cnpj}, com
        sede em {E.endereco}), doravante “Data AS” ou “nós”, coleta, usa, armazena, compartilha e
        protege dados pessoais. Ela se aplica ao site {E.site} e aos aplicativos e serviços da
        Data AS, incluindo as soluções que utilizam a WhatsApp Business Platform (API do WhatsApp
        Business), fornecida pela Meta Platforms, Inc. e pela WhatsApp LLC.
      </p>
      <p>
        Tratamos dados pessoais de acordo com a Lei Geral de Proteção de Dados (Lei nº
        13.709/2018, “LGPD”), o Marco Civil da Internet (Lei nº 12.965/2014), os Termos da
        Plataforma da Meta e as políticas do WhatsApp Business.
      </p>

      <h2>1. Quem é o controlador dos dados</h2>
      <p>
        Para os dados coletados no nosso site e no nosso relacionamento comercial, a Data AS é a
        controladora. Quando prestamos serviços a uma empresa cliente e operamos o WhatsApp em nome
        dela (por exemplo, um atendimento automatizado no número da empresa cliente), a empresa
        cliente é a controladora e a Data AS atua como operadora, tratando os dados apenas conforme
        as instruções do cliente e esta Política.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <h3>2.1 Dados que você nos fornece</h3>
      <ul>
        <li>Nome, e-mail, telefone, empresa e cargo, quando você entra em contato conosco.</li>
        <li>O conteúdo das mensagens que você nos envia por e-mail ou WhatsApp.</li>
      </ul>
      <h3>2.2 Dados tratados por meio da API do WhatsApp Business</h3>
      <ul>
        <li>Número de telefone do WhatsApp e nome de perfil.</li>
        <li>
          Conteúdo das mensagens trocadas com o número comercial (texto, imagens, áudios,
          documentos e outros arquivos que você decidir enviar).
        </li>
        <li>
          Metadados das mensagens: data e hora, identificadores da mensagem e status de entrega e
          leitura.
        </li>
        <li>
          Registro do seu consentimento (opt-in) para receber mensagens e, quando houver, do seu
          pedido para não receber mais (opt-out).
        </li>
      </ul>
      <h3>2.3 Dados coletados automaticamente</h3>
      <ul>
        <li>
          Dados técnicos de acesso ao site, como endereço IP, tipo de navegador, páginas visitadas
          e data e hora do acesso, guardados conforme o Marco Civil da Internet.
        </li>
      </ul>
      <p>
        Não pedimos, por meio do WhatsApp, dados sensíveis (como saúde, religião, biometria ou
        orientação sexual), números completos de cartão de pagamento, senhas ou documentos de
        identidade, exceto quando estritamente necessários ao serviço e com base legal adequada.
      </p>

      <h2>3. Para que usamos os dados</h2>
      <ul>
        <li>Responder a contatos, pedidos de orçamento e solicitações de suporte.</li>
        <li>
          Prestar os serviços contratados, como atendimento, envio de notificações, relatórios e
          alertas pelo WhatsApp.
        </li>
        <li>Enviar mensagens apenas a quem deu consentimento (opt-in) para recebê-las.</li>
        <li>Melhorar a qualidade, a segurança e o funcionamento dos nossos serviços.</li>
        <li>Cumprir obrigações legais e regulatórias e exercer direitos em processos.</li>
      </ul>
      <p>
        Não vendemos dados pessoais. Não usamos dados obtidos pela API do WhatsApp para criar
        perfis de usuários para publicidade de terceiros, nem os compartilhamos com corretores de
        dados (data brokers).
      </p>

      <h2>4. Bases legais (LGPD)</h2>
      <ul>
        <li>Consentimento (art. 7º, I), por exemplo para o recebimento de mensagens no WhatsApp.</li>
        <li>Execução de contrato ou procedimentos preliminares (art. 7º, V).</li>
        <li>Cumprimento de obrigação legal ou regulatória (art. 7º, II).</li>
        <li>Legítimo interesse (art. 7º, IX), respeitados os seus direitos e expectativas.</li>
      </ul>

      <h2>5. Consentimento e como parar de receber mensagens</h2>
      <p>
        Só enviamos mensagens iniciadas pela empresa no WhatsApp a pessoas que deram consentimento
        expresso para recebê-las, como exigem as políticas do WhatsApp Business. Você pode deixar
        de receber mensagens a qualquer momento: basta responder “SAIR” ou “PARAR” na conversa, ou
        escrever para {E.emailPrivacidade}. Você também pode bloquear o número diretamente no
        aplicativo do WhatsApp.
      </p>

      <h2>6. Com quem compartilhamos</h2>
      <ul>
        <li>
          <strong>Meta Platforms e WhatsApp:</strong> as mensagens trafegam pela infraestrutura da
          WhatsApp Business Platform. O tratamento feito pela Meta segue a{" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Política de Privacidade do WhatsApp
          </a>{" "}
          e os{" "}
          <a href="https://www.whatsapp.com/legal/business-terms" target="_blank" rel="noopener noreferrer">
            Termos do WhatsApp Business
          </a>
          .
        </li>
        <li>
          <strong>Provedores de tecnologia:</strong> serviços de hospedagem, nuvem e banco de dados
          que nos ajudam a operar, contratados com obrigações de confidencialidade e segurança.
        </li>
        <li>
          <strong>Empresa cliente:</strong> quando operamos o WhatsApp em nome de uma empresa, os
          dados da conversa ficam disponíveis para essa empresa.
        </li>
        <li>
          <strong>Autoridades:</strong> quando houver obrigação legal ou ordem judicial.
        </li>
      </ul>

      <h2>7. Transferência internacional</h2>
      <p>
        Alguns fornecedores, incluindo a Meta e provedores de nuvem, podem armazenar ou processar
        dados fora do Brasil. Nesses casos, adotamos as salvaguardas previstas no art. 33 da LGPD,
        como cláusulas contratuais e a contratação de fornecedores com níveis adequados de proteção.
      </p>

      <h2>8. Por quanto tempo guardamos</h2>
      <p>
        Guardamos os dados somente pelo tempo necessário para as finalidades desta Política ou pelo
        prazo exigido por lei. Conversas e dados de atendimento são mantidos enquanto durar a
        relação com você ou com a empresa cliente e depois são excluídos ou anonimizados, salvo
        obrigação legal de guarda. Registros de acesso ao site são mantidos por 6 meses, conforme o
        Marco Civil da Internet.
      </p>

      <h2>9. Segurança</h2>
      <p>
        Usamos medidas técnicas e organizacionais para proteger os dados, como criptografia em
        trânsito, controle de acesso por perfil, armazenamento seguro de credenciais e tokens de
        acesso, e registros de auditoria. Nenhum sistema é totalmente imune a riscos. Se ocorrer um
        incidente de segurança relevante, comunicaremos os titulares afetados e a Autoridade
        Nacional de Proteção de Dados (ANPD), conforme a lei.
      </p>

      <h2>10. Seus direitos</h2>
      <p>De acordo com a LGPD, você pode pedir a qualquer momento:</p>
      <ul>
        <li>confirmação de que tratamos seus dados e acesso a eles;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
        <li>portabilidade dos dados a outro fornecedor;</li>
        <li>eliminação dos dados tratados com base no consentimento;</li>
        <li>informação sobre com quem compartilhamos seus dados;</li>
        <li>revogação do consentimento.</li>
      </ul>
      <p>
        Para exercer esses direitos, escreva para{" "}
        <a href={`mailto:${E.emailPrivacidade}`}>{E.emailPrivacidade}</a>. Responderemos em até 15
        dias. Você também pode reclamar à ANPD.
      </p>

      <h2 id="exclusao">11. Como pedir a exclusão dos seus dados</h2>
      <p>
        Você pode pedir a exclusão dos seus dados a qualquer momento. As instruções completas
        estão na página <Link href="/exclusao-de-dados">Exclusão de dados</Link>.
      </p>

      <h2>12. Cookies</h2>
      <p>
        O site usa apenas cookies técnicos, necessários para o seu funcionamento. Se passarmos a
        usar cookies de análise ou publicidade, atualizaremos esta Política e pediremos o seu
        consentimento quando necessário.
      </p>

      <h2>13. Crianças e adolescentes</h2>
      <p>
        Nossos serviços são destinados a empresas e a maiores de 18 anos. Não coletamos dados de
        crianças e adolescentes de forma intencional.
      </p>

      <h2>14. Alterações</h2>
      <p>
        Podemos atualizar esta Política. A data da última atualização fica no topo da página. Se a
        mudança for relevante, avisaremos pelos nossos canais.
      </p>

      <h2>15. Contato e encarregado (DPO)</h2>
      <p>
        Dúvidas sobre privacidade ou proteção de dados: {E.razaoSocial}, {E.endereco}. E-mail do
        encarregado: <a href={`mailto:${E.emailPrivacidade}`}>{E.emailPrivacidade}</a>.
      </p>
    </LegalPage>
  );
}

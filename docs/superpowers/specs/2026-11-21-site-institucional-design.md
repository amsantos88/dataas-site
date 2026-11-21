# Site institucional Data AS — design

## Intenção
Empresas que procuram uma consultoria de dados (geralmente via Google) devem entender em segundos
que a Data AS entrega o processo de dados **do início ao fim** — da engenharia ao BI — e entrar em contato.

## Objetivos
- Comunicar o diferencial: um único parceiro para o processo inteiro.
- Converter visita em contato: WhatsApp (principal) e e-mail (alternativa).
- Publicar via GitHub + Vercel.

## Fora do escopo (por enquanto)
Blog, cases, formulário com backend, múltiplos idiomas.

## Abordagens consideradas
1. **Next.js + Tailwind (escolhida)** — padrão da Vercel, deploy sem configuração, bom SEO, fácil de crescer.
2. HTML/CSS puro — mais simples, mas pior de manter conforme o site cresce.
3. Astro — ótimo para sites institucionais, sem vantagem real aqui.

## Estrutura (página única)
1. Hero: "Seus dados, do início ao fim" + diagrama do pipeline (fontes → engenharia → warehouse → BI) + CTA WhatsApp.
2. Problemas que resolvemos.
3. Como trabalhamos: Diagnóstico → Engenharia → Modelagem → BI → Sustentação.
4. Serviços.
5. Por que a Data AS.
6. Contato + botão flutuante de WhatsApp.

## Contato
- WhatsApp: +55 31 99296-7504 → `https://wa.me/5531992967504`
- E-mail: contato@dataasbr.com (link `mailto:`)

## Decisões do construtor
Paleta azul-tinta + âmbar, tipografia Bricolage Grotesque + Public Sans, textos iniciais escritos por Claude
(o cliente ajusta depois).

import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Data AS | Consultoria de dados do início ao fim",
  description:
    "Engenharia de dados, data warehouse e BI em um só parceiro. A Data AS cuida do processo de dados da sua empresa do início ao fim.",
  openGraph: {
    title: "Data AS | Consultoria de dados do início ao fim",
    description:
      "Engenharia de dados, data warehouse e BI em um só parceiro.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

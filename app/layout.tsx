import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Majd Sufyan | Full Stack Developer specializing in React, Node, AWS and more...",
  description:
    "I am Majd Sufyan a full stack developer specializing in React, Node, AWS, and more. With a passion for turning fantastic ideas into reality, I bring creativity and expertise to every project.",
  url: "https://majd-sufyan.site",
  image:
    "https://camo.githubusercontent.com/81c235b7d2fa5f487d5f146fbb0ba653b42da982d613680ecca41c2f24082981/68747470733a2f2f692e706f7374696d672e63632f344a6a6276566e532f53637265656e73686f742d323032342d30352d32352d61742d32312d33312d34312e706e67",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={metadata.url} />
        <meta property="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import Head from "next/head";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Majd Sufyan | Full Stack Developer specializing in React, Node, AWS
          and more...
        </title>
        <meta
          name="description"
          content="I am Majd Sufyan a full stack developer specializing in React, Node, AWS, and more. With a passion for turning fantastic ideas into reality, I bring creativity and expertise to every project."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Majd Sufyan | Full stack Developer specializing in React, Node, AWS, and more"
        />
        <meta property="og:url" content="https://majd-sufyan.site" />
        <meta
          property="og:image"
          content="https://github.com/Majd-sufian/Portfolio/blob/main/public/png/portfolio.png?raw=true"
        />
        <meta
          property="og:description"
          content="I am Majd Sufyan a full stack developer specializing in React, Node, AWS, and more. With a passion for turning fantastic ideas into reality, I bring creativity and expertise to every project."
        />
        <meta
          name="twitter:title"
          content="Majd Sufyan | Full stack Developer specializing in React, Node, AWS, and more"
        />
        <meta
          name="twitter:description"
          content="I am Majd Sufyan is a full stack developer specializing in React, Node, AWS, and more. With a passion for turning fantastic ideas into reality, I bring creativity and expertise to every project."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://github.com/Majd-sufian/Portfolio/blob/main/public/png/portfolio.png?raw=true"
        />
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

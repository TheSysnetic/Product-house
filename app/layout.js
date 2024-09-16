import "./globals.css";

export const metadata = {
  title: "Product House",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/52ee78d8e2dd2cff11bee95313a93b28?family=Magtis+ExtBd" rel="stylesheet" type="text/css"/>
      </head>
      <body>{children}</body>
    </html>
  );
}

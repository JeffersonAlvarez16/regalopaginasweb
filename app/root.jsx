import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta = () => ({
  charset: "utf-8",
  title: "Regalo Páginas Web | Creamos tu sitio web gratis",
  description:"Crea tu sitio web gratis con Regalo Páginas Web y apoya una buena causa. Ofrecemos diseños personalizados y optimización SEO",
  keywords:"creación de páginas web, diseño web, sitio web gratis, donación, optimización SEO",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

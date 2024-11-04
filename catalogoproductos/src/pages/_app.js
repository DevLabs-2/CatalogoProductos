
import "@/styles/globals.css";
import { CarritoProvider } from "@/carrito";

export default function App({ Component, pageProps }) {
  return (
    <CarritoProvider>
      <Component {...pageProps} />
    </CarritoProvider>
  );
}

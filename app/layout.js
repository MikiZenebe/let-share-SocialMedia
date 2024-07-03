import Hydrate from "./components/Hydrate";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Let-Share",
  description:
    "Let-Share is a social media platform developed by a person called Miki from Ethiopia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Hydrate>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 1500,
            }}
          />
          {children}
        </Hydrate>
      </body>
    </html>
  );
}

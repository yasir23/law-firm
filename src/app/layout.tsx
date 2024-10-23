import MetadataLayout from "./MetadataLayout";
import ClientLayout from "./ClientLayout";
import { NavbarDemo } from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MetadataLayout>
      <ClientLayout>
        <NavbarDemo/>
        {children}
        <Footer/>
        </ClientLayout>
    </MetadataLayout>
  );
}

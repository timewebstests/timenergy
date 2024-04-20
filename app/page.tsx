import MainElements from "@/components/main/mainElements";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar"
import SubmainOne from "@/components/infos/submainOne";


export default function Home() {
  return (
    <main className="flex w-full justify-center flex-wrap">        
      <Navbar />
      <MainElements />
      <SubmainOne />
    </main>
  );
}

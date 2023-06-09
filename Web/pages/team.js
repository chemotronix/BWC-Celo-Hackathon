import Head from "next/head";
import Image from "next/image";
import ColoredCard from "../components/ColoredCard";
import TeamSection from "../components/TeamSection";
import Rectangle from "../images/Rectangle.png";
import Navbar from "../components/Navbar";
import DefaultLayout from "../layouts/DefaultLayout";
import SmallerColorCard from "../components/SmallerColorCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chemotronix | Team</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main
        className="overflow-x-hidden bg-transparent text-black"
        data-theme="emerald"
      >
        <DefaultLayout>
          <div className="flex items-center justify-center bg-[#DCFFEB] py-8 mt-2 mb-10">
            <div className="flex flex-col">
              <h2 className="flex text-3xl lg:text-4xl justify-center font-bold">Our Team</h2>
              <span className="text-xl">Advocates of Net Zero</span>
            </div>
          </div>
          <TeamSection />
        </DefaultLayout>
      </main>
    </div>
  );
}

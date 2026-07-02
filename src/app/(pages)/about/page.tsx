import Image from "next/image";
import Link from "next/link";

import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";
import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";
import { Portfolio } from "@/assets/images/images";

import { FiGithub, FiGlobe } from "react-icons/fi";

import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import BackPage from "@/shared/components/molecules/BackPage";

export default function Page() {
  const links = [
    {
      title: "Portfolio",
      icon: <FiGlobe size={24} />,
      href: "https://zeyadhatem.vercel.app/",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn size={24} />,
      href: "https://www.linkedin.com/in/zeyad-hatem-b95034340",
    },
    {
      title: "GitHub",
      icon: <FiGithub size={24} />,
      href: "https://github.com/Zeyadhatem391",
    },
    {
      title: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      href: "https://wa.me/201112079745",
    },
  ];

  return (
    <DashbordLayout>
      <BackPage />
      <AddressSection titel="About Me" />

      <div className="ds-bg-alt mx-auto flex max-w-3xl flex-col items-center rounded-2xl p-10 shadow-sm">
        <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gray-100 border-4 border-white shadow-lg">
          <Image
            src={Portfolio}
            alt="Zeyad Hatem"
            fill
            className="object-center"
          />
        </div>

        <Titel variant="primary" size="2xl" className="mt-6 font-bold">
          Zeyad Hatem
        </Titel>

        <Text className="text-lg font-medium text-blue-600">
          Front-End Developer
        </Text>

        <Text center className="mt-6 max-w-2xl leading-8 text-gray-500">
          Passionate Front-End Developer specializing in React, Next.js,
          TypeScript, and modern web technologies. I enjoy building fast,
          scalable, and user-friendly web applications with clean code and
          modern UI/UX principles.
        </Text>

        <div className="mt-10 grid w-full grid-cols-2 gap-5">
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              className="flex items-center gap-4 rounded-xl border border-gray-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50"
            >
              <div className="text-2xl text-blue-600">{item.icon}</div>

              <div>
                <h3 className="font-semibold">{item.title}</h3>

                <p className="text-sm text-gray-500">Visit my {item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DashbordLayout>
  );
}

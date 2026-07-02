import Titel from "@/shared/components/atoms/Titel";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string | StaticImageData;
  links: string[];
  src: string;
};

export default function KnowledgeCard({ title, image, links, src }: Props) {
  return (
    <div className="rounded-md ds-bg-alt p-5 shadow-sm flex flex-col gap-4">
      <Image src={image} alt={title} className="mx-auto mb-8 h-32" />

      <Titel variant="primary" size="lg" className="font-extrabold">
        {title}
      </Titel>

      <div className="space-y-3 text-gray-600">
        {links.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <Link
        href={`${src}`}
        className="mt-6 text-blue-600 font-medium hover:underline"
      >
        More Tutorials
      </Link>
    </div>
  );
}

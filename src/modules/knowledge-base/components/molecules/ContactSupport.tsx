import Text from "@/shared/components/atoms/Text";
import Titel from "@/shared/components/atoms/Titel";
import Link from "next/link";

export default function ContactSupport() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center">
      <div className="flex flex-col gap-1">
        <Titel variant="primary" size="xl" className="font-semibold">
          Still Need Help?
        </Titel>

        <Text>Get in touch with us and we will be happy to help you out!</Text>
      </div>

      <Link
        href="/contact"
        className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
      >
        Contact Support
      </Link>
    </section>
  );
}

import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";

interface Props {
  titel: string;
  textButton: string;
  href?: string;
}

export default function AltStatue({ titel, href = "/", textButton }: Props) {
  return (
    <>
      <div className="border border-gray-300 my-4 w-full"></div>

      <Text size="md" className="mb-5">
        {titel}
      </Text>

      <div className="w-full mb-3">
        <Button
          variant="ghost"
          size="md"
          className="w-full flex gap-2 items-center"
          tag="link"
          href={href}
        >
          {textButton}
        </Button>
      </div>
    </>
  );
}

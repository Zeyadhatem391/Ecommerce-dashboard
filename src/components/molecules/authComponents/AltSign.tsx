import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import { FaFacebook, FaGoogle } from "react-icons/fa6";

interface Props {
  titel: string;
}

export default function AltSign({ titel }: Props) {
  return (
    <>
      <div className="border border-gray-300 my-4 w-full"></div>

      <Text size="md" className="mb-5">
        {titel}:
      </Text>

      <div className="w-full mb-3">
        <Button
          variant="ghost"
          size="md"
          className="w-full flex gap-2 items-center"
        >
          <FaGoogle className="w-6 h-6" /> Continue with Google
        </Button>
      </div>

      <div className="w-full mb-2">
        <Button
          variant="ghost"
          size="md"
          className="w-full flex gap-2 items-center"
        >
          <FaFacebook className="w-6 h-6" /> Continue with Facebook
        </Button>
      </div>
    </>
  );
}

import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Titel from "@/components/atoms/Titel";
import AuthLayout from "@/components/layout/AuthLayout";
import AltStatue from "@/components/molecules/authComponents/AltStatue";
import InputForm from "@/components/molecules/authComponents/InputForm";

export default function ConfirmEmail() {
  return (
    <AuthLayout center={true}>
      <div className="flex flex-col gap-2 mb-8 justify-center items-center">
        <Titel variant="primary" size="3xl" className="font-bold">
          Confirm Email
        </Titel>
        <Text>Check Your Email and Enter Confirmation Code</Text>
      </div>

      <InputForm titel="Confirmation Code" placeholder="Enter Code" />

      <div className="w-full mb-3">
        <Button
          variant="primary"
          href="complete-login"
          tag="link"
          size="md"
          className="w-full"
        >
          Confirm Email
        </Button>
      </div>

      <AltStatue
        titel="Haven’t received your code?"
        textButton="Resend Code"
        href="/"
      />
    </AuthLayout>
  );
}

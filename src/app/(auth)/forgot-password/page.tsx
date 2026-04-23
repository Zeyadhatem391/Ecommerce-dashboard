import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Titel from "@/components/atoms/Titel";
import AuthLayout from "@/components/layout/AuthLayout";
import AltStatue from "@/components/molecules/authComponents/AltStatue";
import InputForm from "@/components/molecules/authComponents/InputForm";

export default function ForgetPassword() {
  return (
    <AuthLayout center={true}>
      <div className="flex flex-col gap-2 mb-8 justify-center items-center">
        <Titel variant="primary" size="3xl" className="font-bold">
          Password Reset
        </Titel>
        <Text>We Will Help You Reset your Password</Text>
      </div>

      <InputForm titel="Email" placeholder="Enter Email Address" />

      <div className="w-full mb-3">
        <Button
          variant="primary"
          href="confirm-email"
          tag="link"
          size="md"
          className="w-full"
        >
          Reset Password
        </Button>
      </div>

      <AltStatue
        titel="Remembered your Password?"
        href="login"
        textButton="Back to Sign In"
      />
    </AuthLayout>
  );
}

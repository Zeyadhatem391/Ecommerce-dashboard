import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Titel from "@/components/atoms/Titel";
import AuthLayout from "@/components/layout/AuthLayout";
import AltSign from "@/components/molecules/authComponents/AltSign";
import InputForm from "@/components/molecules/authComponents/InputForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-2 mb-6 justify-center items-center">
        <Titel variant="primary" size="3xl" className="font-bold">
          Create an Account
        </Titel>
        <Text>
          Have an Account?
          <a href="login" className="ds-text-alt ml-1">
            Sign In
          </a>
        </Text>
      </div>

      <InputForm titel="Name" placeholder="Enter Name" />

      <InputForm titel="Email" placeholder="Enter Email Address" />

      <InputForm titel="Password" placeholder="Create Password" />

      <div className="w-full mb-3">
        <Button variant="primary" size="md" className="w-full">
          Create Account
        </Button>
      </div>

      <Text variant="disabled" size="lg">
        By creating account, you agree to our
      </Text>

      <Text variant="alt" size="lg">
        Terms of Service
      </Text>

      <AltSign titel="Or create an account using" />
    </AuthLayout>
  );
}

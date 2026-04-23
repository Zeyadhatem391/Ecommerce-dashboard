import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Titel from "@/components/atoms/Titel";
import AuthLayout from "@/components/layout/AuthLayout";
import AltSign from "@/components/molecules/authComponents/AltSign";
import InputForm from "@/components/molecules/authComponents/InputForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-2 mb-6 justify-center items-center">
        <Titel variant="primary" size="3xl" className="font-bold">
          Sign In
        </Titel>
        <Text>
          New to Our Product?
          <a href="register" className="ds-text-alt ml-1">
            Create an Account
          </a>
        </Text>
      </div>

      <InputForm titel="Email" placeholder="Enter Email Address" />

      <InputForm titel="Password" placeholder="Enter Password" />

      <div className="flex gap-2 items-center w-full justify-start mb-5">
        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
        <span>Keep me signed in</span>
      </div>

      <div className="w-full mb-3">
        <Button variant="primary" size="md" className="w-full">
          Create Account
        </Button>
      </div>

      <Text variant="alt" size="lg">
        <a href="forgot-password">Forgot your password?</a>
      </Text>

      <AltSign titel="Or sign in using" />
    </AuthLayout>
  );
}

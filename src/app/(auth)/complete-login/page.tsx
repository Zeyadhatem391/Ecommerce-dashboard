import { Email } from "@/assets/images/images";
import Images from "@/components/atoms/Image";
import Text from "@/components/atoms/Text";
import Titel from "@/components/atoms/Titel";
import AuthLayout from "@/components/layout/AuthLayout";
import AltStatue from "@/components/molecules/authComponents/AltStatue";


export default function CompleteLogin() {
  return (
    <AuthLayout center={true}>
      <Images src={Email} alt="email" width={200} height={200} className="mb-5"/>
      <div className="flex flex-col gap-2 mb-8 justify-center items-center">
        <Titel variant="primary" size="3xl" className="font-bold">
          Almost There!
        </Titel>
        <Text>Check your email inbox and confirm your account</Text>
      </div>

      <AltStatue
        titel="Didn’t receive any mail?"
        textButton="Resend Confirmation"
        href="/"
      />
    </AuthLayout>
  );
}

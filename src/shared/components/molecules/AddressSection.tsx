import Titel from "../atoms/Titel";

interface Props {
  titel: string;
  textButton?: string;
}

export default function AddressSection({ titel, textButton }: Props) {
  return (
    <div className="mb-4">
      <Titel variant="primary" size="2xl" className="font-bold">
        {titel}
      </Titel>
    </div>
  );
}

import InfoSection from "../molecules/InfoSection";
import ImageSection from "../molecules/ImageSection";
import PriceSection from "../molecules/PriceSection";
import ShippingSection from "../molecules/ShippingSection";
import OptionsSection from "../molecules/OptionsSection";
import { Product } from "../../types/type";

interface LeftAddProductProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function LeftAddProduct({
  product,
  setProduct,
}: LeftAddProductProps) {
  return (
    <div className="lg:col-span-2 ds-bg-alt rounded-xl p-6 shadow-sm">
      <InfoSection product={product} setProduct={setProduct} />

      <div className="my-7 border-b-2 border-gray-200"></div>

      <ImageSection product={product} setProduct={setProduct} />

      <div className="my-7 border-b-2 border-gray-200"></div>

      <PriceSection product={product} setProduct={setProduct} />

      <div className="my-7 border-b-2 border-gray-200"></div>

      <OptionsSection product={product} setProduct={setProduct} />

      <div className="my-7 border-b-2 border-gray-200"></div>

      <ShippingSection product={product} setProduct={setProduct} />
    </div>
  );
}

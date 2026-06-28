
import { Product } from "../../types/type";
import SeoSetting from "../molecules/SeoSetting";
import TagsSection from "../molecules/TagsSection";
import CategorySection from "../molecules/CategorySection";

interface RightAddProductProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export default function RightAddProduct({
  product,
  setProduct,
}: RightAddProductProps) {


  return (
    <div className="flex flex-col gap-6">
      <CategorySection product={product} setProduct={setProduct} />

      <TagsSection product={product} setProduct={setProduct} />

      <SeoSetting product={product} setProduct={setProduct} />
    </div>
  );
}

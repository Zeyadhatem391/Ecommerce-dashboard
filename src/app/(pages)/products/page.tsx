"use client";

import { useEffect, useState } from "react";

import DashbordLayout from "@/shared/components/layout/DashbordLayout";
import AddressSection from "@/shared/components/molecules/AddressSection";
import PaginationSection from "@/shared/components/molecules/PaginationSection";
import ProductCard from "@/modules/products/components/molecules/ProductCard";
import Toolbar from "@/shared/components/molecules/Toolbar";
import { productData } from "@/modules/products/data/Products";
import ButtonsExport from "@/shared/components/molecules/ButtonsExport";
import TableHeader from "@/shared/components/molecules/TableHeader";
import { productColumns } from "@/shared/data/TablesHead";

export default function ProductsPage() {
  // const [products, setProducts] = useState(productData);
  // const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  // useEffect(() => {
  //   const localProducts = JSON.parse(localStorage.getItem("products") || "[]");

  //   setProducts([...productData, ...localProducts]);
  // }, []);

  // const handleSelect = (id: string) => {
  //   setSelectedProducts((prev) =>
  //     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
  //   );
  // };

  // const handleDelete = () => {
  //   const updatedProducts = products.filter(
  //     (product) => !selectedProducts.includes(product.id),
  //   );

  //   setProducts(updatedProducts);

  //   const localProducts = updatedProducts.filter(
  //     (product) => !productData.some((item) => item.id === product.id),
  //   );

  //   localStorage.setItem("products", JSON.stringify(localProducts));

  //   setSelectedProducts([]);
  // };

  return (
    <DashbordLayout>
      <div className="flex justify-between mb-3">
        <AddressSection titel="Products" />

        <ButtonsExport
          nameButton="Export"
          nameButtonAdd="Add Product"
          href="/products/add-product"
          isIcon
        />
      </div>

      <div className="ds-bg-alt w-full rounded-md p-4 shadow-xs">
        {/* <Toolbar
          onDelete={handleDelete}
          selectedCount={selectedProducts.length}
        /> */}

        <table className="w-full table-fixed">
          <TableHeader columns={productColumns} />

          <tbody>
            {/* {products.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                id={item.id}
                checked={selectedProducts.includes(item.id)}
                onSelect={handleSelect}
              />
            ))} */}
            <ProductCard />
          </tbody>
        </table>

        {/* <PaginationSection number={products.length} /> */}
      </div>
    </DashbordLayout>
  );
}

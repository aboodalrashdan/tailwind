import Image from "next/image";
import { Container } from "app/components/Container";
import { productParagraphs } from "../../constant/productInfo";
import { Product } from '../../constant/types'; 

type ProductDetailsProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { id } = params;

  const product = await fetchProduct(id);

  return (
    <Container>
      <div className="flex flex-col gap-[1.375rem] pt-5 pb-[8.75rem] lg:flex-row">
        <div className="flex items-center flex-col gap-2 w-full lg:w-[500px]">
          <h2 className="font-bodyFont text-[1.875rem] leading-[1.33] font-medium lg:hidden md:text-[2.25rem] md:leading-[1.2]">{product.title}</h2>
          <Image
            alt={`Image of ${product.title}`}
            src={product.thumbnail}
            width={1000}
            height={1000}
            className="object-cover w-[350px] h-[350px]"
            priority
          />
          <p className="text-center text-[1.25rem] font-medium max-lg:hidden">
            The product is manufactured using the finest quality resources, is made for your pleasure moments.
            <span className="block mt-5">🚚 FREE SHIPPING</span>
          </p>
        </div>

        <div className="flex items-start flex-col gap-[1.375rem]">
          <h2 className="font-bodyFont text-[1.875rem] leading-[1.33] font-medium md:text-[2.25rem] md:leading-[1.2] max-lg:hidden">{product.title}</h2>
          <div className="flex items-center justify-between flex-row gap-2 w-full">
            <p className=" text-greenline text-[1.5rem] font-semibold">${product.price}</p>
            <button type="button" className="inline-flex items-center justify-center select-none relative align-middle leading-[1.2] font-semibold  h-8 min-w-8 text-[16px] px-6 py-5 text-white bg-greenline whitespace-nowrap border-2 border-transparent rounded-md">
              Add to cart
            </button>
          </div>
          <p>
            The product is manufactured using the finest quality resources, is made for your pleasure moments.
          </p>

          <div className="flex items-start flex-col gap-2 w-full p-5 border border-gray-400 rounded-md">
            {productParagraphs.map((item) => (
              <p className="text-[#849a8e]" key={item.id}>
                <strong className=" text-[#1d252c]">{item.title}:</strong> {item.role(product)}
              </p>
            ))}
          </div>

          <p className="text-center text-[1.5rem] font-semibold lg:hidden">
            {product.description}
            <span className="block mt-5">🚚 FREE SHIPPING</span>
          </p>
        </div>
      </div>
    </Container>
  );
}

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: Product = await res.json();
  return product;
}

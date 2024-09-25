import Image from "next/image";
import Link from "next/link";
import { Container } from "app/components/Container";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-2 py-10">
        <h2 className="font-bodyFont text-3xl leading-[1.33] font-normal">
          Products
        </h2>
        <p className="text-[18px] text-gray-600">
          Order it for you or for your beloved ones
        </p>
        <div className="grid gap-5 grid-cols-1 mt-15 w-full md:grid-cols-2 lg:grid-cols-4">
          {products.map((product: Product) => (
            <Link
              key={product.id}
              className="flex flex-col relative min-w-[256px] shadow-md rounded-md text-gray-800"
              href={`/products/${product.id}`}
              passHref
            >
              <div className="p-0 bg-gray-50">
                <Image
                  alt={`Image of ${product.title}`}
                  src={product.thumbnail}
                  width={100}
                  height={100}
                  className="object-contain w-full h-[100px] md:h-[150px]"
                  priority
                />
              </div>
              <div className="p-5 flex-1 font-medium">
                <p className="text-black">{product.title}</p>
                <p className="text-right text-greenline">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

async function fetchProducts(limit: number = 8): Promise<Product[]> {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  const data = await res.json();
  return data.products;
}

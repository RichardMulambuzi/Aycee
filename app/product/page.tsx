/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import SingleProduct from "@/components/SingleProduct";
import { getSingleProduct} from "@/helpers";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const ProductPage = async ({ searchParams }: Props) => {
  try {
    const _idString = searchParams?._id;
    const _id = Number(_idString);

    // Fetch the single product
    const product = await getSingleProduct(_id);
    return (
      <div>
        <Container>
          <SingleProduct product={product} />{" "}
        </Container>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product or trending products:", error);
    return (
      <div className="flex items-center justify-center py-20">
        <div className="max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5">
          <h2 className="text-4xl font-bold">Product Not Found</h2>
          <p className="text-base font-medium text-center">
            Oops! We couldn't find the product you were looking for. It appears
            that the page you are trying to access does not exist or may have
            been removed.
          </p>
          <Link
            href={"/"}
            className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-orange-600 hover:text-white duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
};

export default ProductPage;

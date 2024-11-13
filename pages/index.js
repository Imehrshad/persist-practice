import Carousel from "@/components/Carousel";
import { GET } from "@/repository/FetchGet";


export default function Home(props) {
  return (
    <div>
      <Carousel products={props.carouselDataResult} />
    </div>
  );
}
export async function getStaticProps(context) {
  const carouselData = await GET("/products?limit=10")
  const carouselDataResult = await carouselData.json()

  return {
    props: {
      carouselDataResult,
    }
  }
}

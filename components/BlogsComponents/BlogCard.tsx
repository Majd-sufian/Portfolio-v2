import ShimmerButton from "../atoms/ShimmerButton";
import { CardContainer, CardBody, CardItem } from "./Card3D";
import { redirectTo } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  img: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, img, link }) => {
  return (
    <CardContainer className="inter-var flex flex-col gap-4 p-4 rounded-lg shadow-lg">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-center w-full text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-20">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
          >
            <ShimmerButton text="Read More" onClick={() => redirectTo(link)} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default BlogCard;

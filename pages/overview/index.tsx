import Dashboard from "@/components/layout";
import OverviewComponent from "@/components/overview/overview-component";
import { useState } from "react";
import Image from "next/image";

// import "bootstrap-icons/font/bootstrap-icons.css";
type Image = {
  id: number;
  src: string;
  alt: string;
};

const images: Image[] = [
  {
    id: 1,
    src: "/assets/images/img4.jpg",
    alt: "Image 1",
  },
  {
    id: 1,
    src: "/assets/images/img4.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "/assets/images/img5.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "/assets/images/img7.jpg",
    alt: "Image 3",
  },
];

export default function Home() {
  const [showFullImage, setShowFullImage] = useState(false);
  return (
    <>
      <Dashboard page={""}>
        <div className="flex w-full justify-between">
          <div className="flex">
            <img src="/assets/images/guideline-icon.svg" width={80} />
            <div>
              <h2 className="font-bold text-xl p-2">GWCL</h2>
              <div className="flex">
                <p className="text-gray-500 px-2">Client: Htmlstream</p>
                <p className="text-gray-500 px-2">Due date</p>
                <p className="text-blue-500 px-2">29/06/2020</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
            <h2 className="text-xs font-bold text-gray-700 p-4">TEAM MEMBERS:</h2>
              <div className="overflow-hidden flex w-full">
                {images.map((image, index) => (
                  <Image
                  width={20}
                  height={20}
                    key={image.id}
                    className={`rounded-full h-full transform transition-transform duration-300 hover:scale-125 w-14 h-14 ${
                      index !== 0 ? "-ml-6" : ""
                    }`}
                    src={image.src}
                    alt={image.alt}
                    onMouseEnter={() => setShowFullImage(!showFullImage)}
                    onMouseLeave={() => setShowFullImage(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <OverviewComponent />
      </Dashboard>
    </>
  );
}

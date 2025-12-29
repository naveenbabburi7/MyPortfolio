import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Links from "./Links";
import Image from "next/image";

function Main() {
  return (
    <div className="px-8 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8">

      {/* Text Section */}
      <div className="flex flex-col gap-8 col-span-1 sm:col-span-2 items-center sm:items-center text-center sm:text-center sm:place-content-center">

        <Heading className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Hello Everyone, I am Naveen Kumar
        </Heading>
        <Paragraph className="w-full text-xl">
          I am doing Projects on Frontend Web & Mobile Development
        </Paragraph>
        <Links />
      </div>

      {/* Image Section */}
      <div className="flex justify-center sm:justify-end">
        <img
          src="/images/work/naveen.jpeg"
          className="w-full max-w-[300px] sm:max-w-none min-h-96 bg-gray-200 rounded-xl object-cover object-right block"
          alt="Naveen Image"
        />
      </div>
    </div>
  );
}

export default Main;

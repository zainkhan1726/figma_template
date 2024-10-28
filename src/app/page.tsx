import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="flex h-[465px] w-11/12">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4">
          <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
          <p className="font-normal text-[32px] text-slate-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard
          </p>
          <button className=" text-white bg-black font-normal text-[28px] w-[237px] h-[66px] p-4">
            Contact US
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/banner_image.png"
            alt="Banner image"
            width={502}
            height={465}
          />
        </div>
      </div>
    </div>
  );
}

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:singhabhaypratap72003@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Abhay Pratap Singh
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={getSocialMediaLink(info.img)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={info.img}
                alt={getSocialMediaName(info.img)}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

const getSocialMediaLink = (img: string) => {
  switch (img) {
    case "/git.svg":
      return "https://github.com/AbhayPratap7";
    case "/final.png":
      return "https://www.instagram.com/abhay_pratap._.singh/";
    case "/link.svg":
      return "https://www.linkedin.com/in/abhay-pratap-singh-sanchora-6b11b4293/";
    default:
      return "#";
  }
};

const getSocialMediaName = (img: string) => {
  switch (img) {
    case "/git.svg":
      return "GitHub";
    case "/final.png":
      return "Instagram";
    case "/link.svg":
      return "LinkedIn";
    default:
      return "Social Media";
  }
};

export default Footer;

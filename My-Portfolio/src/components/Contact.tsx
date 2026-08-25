import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div
      className="min-h-[30vh] w-full flex flex-col items-center p-8 gap-6 bg-[rgba(0,0,0,2)]"
      id="contact"
    >
      <h1 className="text-5xl font-bold text-center">Contact Me</h1>
      <p className="text-center">
        I&apos;m always open to new opportunities. Feel free to reach out with
        any inquiries or project proposals.
      </p>

      <div className="w-full max-w-2xl flex flex-row flex-wrap gap-4 lg:justify-between px-2 justify-center">
        <a
          href="mailto:kanakpherwani29@gmail.com"
          target="_blank"
          className="flex gap-4 items-center w-[16rem]"
        >
          <div className="text-white bg-[rgba(0,0,0,2)] rounded-md px-2 py-1 text-xs border-[1px] border-[rgba(255,255,255,0.1)]">
            <IoMdMail className="text-blue-700 size-10"></IoMdMail>
          </div>
          <span className="text-white">kanakpherwani29@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kanak-pherwani/"
          target="_blank"
          className="flex gap-4 items-center w-[16rem]"
        >
          <div className="text-white bg-[rgba(0,0,0,2)] rounded-md px-2 py-1 text-xs border-[1px] border-[rgba(255,255,255,0.1)]">
            <FaLinkedinIn className="text-blue-700 size-10"></FaLinkedinIn>
          </div>
          <span className="text-white">@KanakPherwani</span>
        </a>
        <a
          href="https://github.com/Kanak2908"
          target="_blank"
          className="flex gap-4 items-center w-[16rem]"
        >
          <div className="text-white bg-[rgba(0,0,0,2)] rounded-md px-2 py-1 text-xs border-[1px] border-[rgba(255,255,255,0.1)]">
            <FaGithub className="text-blue-700 size-10"></FaGithub>
          </div>
          <span className="text-white">@Kanak Pherwani</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;

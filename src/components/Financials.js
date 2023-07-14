import { FaTwitter,FaFacebookF ,FaInstagram, FaLinkedin } from "react-icons/fa";

const Financials = () => {
  return (
    <div className="w-11/12 md:flex md:w-10/12 lg:w-8/12 mx-auto mt-28">
      <div className="md:w-4/12">
        <h2 className="uppercase mb-20 lg:text-3xl md:text-2xl text-2xl font-bold text-green-700 tracking-wider">
          LATEST UPDATES
        </h2>
        <h4 className="uppercase lg:text-2xl md:text-xl text-xl font-bold text-green-700 tracking-wider">
          FOLLOW US ON SOCIAL MEDIA
        </h4>
        {/* <p className="text-sm">Quarter Ended Mar 31, 2023</p> */}
      </div>
      <div class="md:w-8/12">
        <div className="md:mt-28  mt-10 ">
          <ul>
            <li className="flex items-center justify-between">
              <a
                className="text-xl text-green-700 underline decoration-solid font-bold"
                href="assets/Hercules Group.pdf"
                target="_blank"
              >
                LINKDEN
              </a>
              <a href="assets/Hercules Group.pdf" download>
                <FaLinkedin className="text-2xl text-green-700 font-bold" />
              </a>
            </li>
            <div className="divider"></div>
            <li className="flex items-center justify-between">
              <a
                className="text-xl text-green-700 underline decoration-solid font-bold"
                href="assets/Hercules Group.pdf"
                download
              >
                INSTAGRAM
              </a>
              <a href="assets/Hercules Group.pdf" download>
                <FaInstagram className="text-2xl text-green-700 font-bold" />
              </a>
            </li>
            <div className="divider"></div>
            <li className="flex items-center justify-between">
              <a
                className="text-xl text-green-700 underline decoration-solid font-bold"
                href="assets/Hercules Group.pdf"
                download
              >
                FACEBOOK
              </a>
              <a href="assets/Hercules Group.pdf" download>
                <FaFacebookF className="text-2xl text-green-700 font-bold" />
              </a>
            </li>
            <div className="divider"></div>
            <li className="flex items-center justify-between">
              <a
                className="text-xl text-green-700 underline decoration-solid font-bold"
                href="assets/Hercules Group.pdf"
                download
              >
                TWITTER
              </a>
              <a href="assets/Hercules Group.pdf" download>
                <FaTwitter className="text-2xl text-green-700 font-bold" />
              </a>
            </li>
            <div className="divider"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Financials;

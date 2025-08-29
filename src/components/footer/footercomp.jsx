const FooterComp = () => {
  return (
    <div className="flex flex-row gap-20 py-10 px-15 md:gap-30  bg-linear-to-r/oklab  from-[#c5b358] to-[#BDB76B] text-light">
      <div className="flex flex-col gap-10 md:flex-row md:gap-40">
        <div className="">
          <h3 className="no-underline sm:underline decoration-[#444] decoration-4 underline-offset-[1em] pb-10 text-lg font-bold">
            Contact
          </h3>
          <ul className="flex flex-col items-start justify-start text-base font-medium">
            <li>
              <a href="mailto:awada141@proton.me">Mail</a>
            </li>
            <li>Beirut, Lebanon</li>
          </ul>
        </div>
        <div>
          <h3 className="no-underline sm:underline decoration-[#444] decoration-4 underline-offset-[1em] pb-10 text-lg font-bold">
            Webnovel
          </h3>
          <ul className="flex flex-col items-start justify-start">
            <li>
              <a href="https://www.webnovel.com/book/the-legend-of-ice_12295840206225005">
                The Legend of Ice
              </a>
            </li>
            <li>
              <a href="https://www.webnovel.com/book/the-time-wanderer_14031670706138805">
                The Time Wanderer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:gap-40">
        <div>
          <h3 className="no-underline sm:underline decoration-[#444] decoration-4 underline-offset-[1em] pb-10 text-lg font-bold">
            Royal Road
          </h3>
          <ul className="flex flex-col items-start justify-start">
            <li>
              <a href="https://www.royalroad.com/fiction/85591/the-legend-of-ice">
                The Legend of Ice
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="no-underline sm:underline decoration-[#444] decoration-4 underline-offset-[1em] pb-10 text-lg font-bold">
            Socials
          </h3>
          <ul className="flex flex-col items-start justify-start">
            <li>
              <a
                href="https://www.instagram.com/awada141"
                className="fa fa-instagram"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterComp;

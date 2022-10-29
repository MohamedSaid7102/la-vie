import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {}
interface FooterSectionProps {
  heading: string;
  listOfLinks: Array<ReactElement<HTMLElement>>;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  heading,
  listOfLinks,
}) => {
  return (
    <>
      <div className="flex flex-col justify-end gap-[0.5rem] w-max  sm:text-left">
        <h4 className="uppercase text-primary font-bold">{heading}</h4>
        <ul className="flex flex-col gap-[1rem]">
          {listOfLinks.map((link, key) => (
            <li key={key}>{link}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="pl-4 sm:pl-0 bg-footerBg text-slate-400 mt-[5rem] sm:px-[5rem] py-[2rem] sm:py-[6rem] flex flex-col items-start sm:flex-row flex-wrap justify-around gap-[2rem]">
      {/* Section 1 */}
      <div className="flex flex-col items-center gap-[1rem] sm:items-start">
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="max-w-[100px]"
        />
        <p className="uppercase sm:max-w-[350px]  sm:text-left">
          <span className="text-primary">LA VIE</span> LA VIE We're dedicated to
          giving you the very best of plants, with a focus on dependability
        </p>
      </div>
      {/* Section 2 */}
      <FooterSection
        heading="sections"
        listOfLinks={[
          <Link to="home">Home</Link>,
          <Link to="category">Category</Link>,
          <Link to="new">New</Link>,
          <Link to="requestToBeSeller">Request To Be Seller</Link>,
        ]}
      />
      {/* Section 3 */}
      <FooterSection
        heading="contact us"
        listOfLinks={[
          <a href="tel:+201096787085">phone: +201096787085</a>,
          <a href="tel:+01244522323">phone: +01244522323</a>,
          <a
            href="mailto:mohamedshelfwork@gmail.com"
            className="flex flex-col sm:flex-row flex-wrap justify-start"
          >
            <span>Email:</span> <span>mohamedshelfwork@gmail.com</span>
          </a>,
          <span>6 October city ,Giza ,egypt</span>,
        ]}
      />
      {/* News litter */}
      <div className="flex flex-col gap-4 sm:gap-16">
        {/* News letter */}
        <form action="#!" className="flex flex-col gap-3">
          <label
            className="uppercase text-primary font-bold max-w-[15rem]  sm:text-left sm:m-0"
            htmlFor="news-letter-email"
          >
            SIGN FOR OUR NEWLETEER AND GET A 10% DISCOUNT
          </label>
          <div className="flex gap-4 flex-wrap justify-start">
            <input
              type="email"
              name="email"
              id="news-letter-email"
              className="border-b-2 border-solid border-slate-400 bg-transparent"
              placeholder="Your Email Address"
            />
            <button
              type="submit"
              className="uppercase text-slate-400 border border-solid bottom-[2px] border-slate-400 px-8 py-2 hover:bg-slate-400 hover:text-black "
            >
              Submit
            </button>
          </div>
        </form>
        {/* Social contacts */}
        <div className="flex flex-col items-start gap-5">
          <h4 className="uppercase text-primary font-bold text-left sm:m-0">
            our social
          </h4>
          <div className="flex flex-row flex-wrap gap-6 w-max">
            {/* Facebook */}
            <Link to="">
              <img
                src="/assets/images/footer-facebook-icon.png"
                alt="facebook logo"
              />
            </Link>
            {/* Instagram */}
            <Link to="">
              <img
                src="/assets/images/footer-instagram-icon.png"
                alt="instagram logo"
              />
            </Link>
            {/* Twitter */}
            <Link to="">
              <img
                src="/assets/images/footer-twitter-icon.png"
                alt="twitter logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

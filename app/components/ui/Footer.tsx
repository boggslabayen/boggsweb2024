import {
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelopeOpen,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { quickSand } from "./Fonts";

export default function Footer() {
  return (
    <>
      <div className="py-8 bg-black mt-4">
        <p className={`${quickSand.className} text-lg  text-center text-white`}>
          Connect with me in these socials
        </p>
        <div className="flex gap-8 py-8 justify-center">
          <div className="max-w-6 min-w-6">
            <a
              href="https://www.linkedin.com/in/jose-ildefonso-labayen-01013851/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white hover:text-amber-500"
              />
            </a>
          </div>
          <div className="max-w-6 min-w-6">
            <a href="https://www.instagram.com/boggslabayen" target="_blank">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="text-white hover:text-amber-500"
              />
            </a>
          </div>
          <div className="max-w-6 min-w-6">
            <a href="https://www.twitter.com/boggslabayen" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white hover:text-amber-500"
              />
            </a>
          </div>
          <div className="max-w-6 min-w-6">
            <a
              href="mailto:labayen.boggs@gmail.com?subject=Hello!"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faEnvelopeSquare}
                className="text-white hover:text-amber-500"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

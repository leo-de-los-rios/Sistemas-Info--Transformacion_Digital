import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="border-top">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="#!">
                  <span className="fa-stack fa-lg">
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2x"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="1x"
                      inverse
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <span className="fa-stack fa-lg">
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2x"
                    />
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      size="1x"
                      inverse
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#!">
                  <span className="fa-stack fa-lg">
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="2x"
                    />
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="1x"
                      inverse
                    />
                  </span>
                </a>
              </li>
            </ul>
            <div className="small text-center text-muted fst-italic">
              &copy; Diseñado por Leonardo de los Rios - N° Registro 21.198
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link
          className="navbar-brand"
          href="/">
          Transformación Digital
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
          Menu&nbsp;
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link px-lg-3 py-3 py-lg-4"
                href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-lg-3 py-3 py-lg-4"
                href="/informe-vortex-2023/">
                Vortex 2023
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-lg-3 py-3 py-lg-4"
                href="/futuras-economias-digitales/">
                Futuras Economías Digitales
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-lg-3 py-3 py-lg-4"
                href="/nuevas-tecnologias/">
                Nuevas Tecnologías Digitales
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link px-lg-3 py-3 py-lg-4"
                href="/singularidad/">
                Singularidad Tecnológica
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

import Link from "next/link";

function MainContent() {
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/* Informe Vortex 2023 */}
            <div className="post-preview">
              <Link href="/informe-vortex-2023/">
                <h2 className="post-title">
                  Informe del Vórtice Digital en 2023
                </h2>
                <h3 className="post-subtitle">
                  Análisis de las empresas de Taiwán en el año 2023 y el impacto
                  de la transformación digital.
                </h3>
              </Link>
              <p className="post-meta">
                Información extraída de&nbsp;
                <a href="https://www.imd.org/research-knowledge/digital/reports/digital-vortex-2023-report/">
                  Digital Vortex 2023 report
                </a>
              </p>
            </div>
            <hr className="my-4" />
            {/* Futuras Economías Digitales */}
            <div className="post-preview">
              <Link href="/futuras-economias-digitales/">
                <h2 className="post-title">Futuras Economías Digitales</h2>
                <h3 className="post-subtitle">
                  Impacto de la transformación digital en las economías
                  digitales en el año 2023.
                </h3>
              </Link>
              <p className="post-meta">
                Información extraída de&nbsp;
                <a href="https://forbescentroamerica.com/2023/06/29/la-transformacion-digital-es-esencial-para-el-desarrollo-de-las-futuras-economias-digitales-2">
                  La transformación digital es esencial para el desarrollo de
                  las futuras economías digitales.
                </a>
              </p>
            </div>
            <hr className="my-4" />
            {/* Nuevas Tecnologías Digitales */}
            <div className="post-preview">
              <Link href="/nuevas-tecnologias/">
                <h2 className="post-title">Nuevas Tecnologías Digitales</h2>
                <h3 className="post-subtitle">
                  Desarrollo de Nuevas Tecnologías Digitales, implementaciones y
                  las tendencias.
                </h3>
              </Link>
              <p className="post-meta">
                Información extraída de&nbsp;
                <a href="https://forbescentroamerica.com/2022/03/16/transformacion-digital-2">
                  Tendencias de transformación digital. Tendencias 2022 en las
                  empresas.
                </a>
              </p>
            </div>
            <hr className="my-4" />
            {/* Singularidad */}
            <div className="post-preview">
              <Link href="/nuevas-tecnologias/">
                <h2 className="post-title">Singularidad Tecnológica</h2>
                <h3 className="post-subtitle">
                  Cómo afecta la singularidad Tecnológica en la vida de los
                  seres humanos.
                </h3>
              </Link>
              <p className="post-meta">
                Información extraída de&nbsp;
                <a href="https://www.astra-castra.com/en/post/the-technological-singularity">
                  La Singularidad (tecnológica).
                </a>
              </p>
            </div>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;

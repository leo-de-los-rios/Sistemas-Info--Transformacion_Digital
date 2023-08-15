import PageHeader from "@/components/PageHeader";
import Image from "next/image";

import vortex_bg from "@/assets/img/informe_vortex/vortex-bg.jpg";
import image_1 from "@/assets/img/informe_vortex/vortex-1.jpg";

function page() {
  return (
    <>
      <PageHeader
        postHeading="Informe Digital Vortex 2023"
        subheading="Informe sobre los sectores más susceptibles a la transformación digital en Taiwán en 2023."
        meta={
          <>
            Extraído de&nbsp;
            <a href="https://www.imd.org/research-knowledge/digital/reports/digital-vortex-2023-report/">
              Digital Vortex 2023 report.
            </a>
          </>
        }
        backgroundImage={vortex_bg.src}
      />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h2 className="section-heading">
                ¿En qué consiste el Informe Vortex?
              </h2>
              <p>
                El informe Digital Vortex es un informe emitido por la IMD que
                muestra&nbsp;
                <strong>
                  cuáles son los sectores que son más susceptibles a la
                  transformación Digital
                </strong>
                .
              </p>
              <p>
                El&nbsp;
                <strong>
                  <em>
                    Centro Global para la Transformación de Negocios Digitales
                    del Instituto Internacional del Manejo del Desarrollo
                  </em>
                </strong>
                (International Institute for Management Development, IMD) en el
                año 2023 publicó los sectores más susceptibles a la
                transformación digital y enfatizó sobre este fenómeno que&nbsp;
                <strong>
                  afecta a todas las industrias sin depender del sector
                </strong>
                .
              </p>
              <p>
                <strong>El informe se emite desde el año 2015</strong> y se
                puede visualizar cómo es la&nbsp;
                <strong>
                  tendencia del cambio de las organizaciones con respecto a la
                  transformación digital
                </strong>
                .
              </p>
              <p>
                La característica del vórtice digital es que mientras más
                cercano al centro del mismo, el sector requiere una mayor
                transformación digital.
              </p>
              <a href="https://www.imd.org/research-knowledge/digital/reports/digital-vortex-2023-report/">
                <Image
                  className="img-fluid"
                  src={image_1}
                  alt="Sectores afectados por la Transformación Digital"
                />
              </a>
              <span className="caption text-muted">
                Sectores afectados por la Transformación Digital.
              </span>
              <p>
                <strong>Top 5 de los sectores más afectados</strong>:
              </p>
              <p>
                <ol>
                  <li>Productos y Servicios Tecnológicos.</li>
                  <li>Educación.</li>
                  <li>Servicios Financieros.</li>
                  <li>Telecomunicaciones.</li>
                  <li>Servicios Profesionales.</li>
                </ol>
              </p>
              <p>
                La característica que comparten estos sectores es el&nbsp;
                <strong>enfoque en el cliente</strong>.
              </p>
              <h2 className="section-heading">
                ¿Cuáles son los motivos del incremento de la Transformación
                Digital?
              </h2>
              <p>
                Uno de los motivos fundamentales es el incremento de&nbsp;
                <strong>
                  la Inteligencia Artificial que ha modificado el rumbo de los
                  sectores de la industria
                </strong>
                , con aplicaciones que tienen el potencial de transformar
                diversas industrias y ámbitos.
              </p>
              <p>
                Otro de los principales factores de incremento de la
                transformación fue la <strong>pandemia del covid-19</strong>, la
                cual aceleró el proceso de cambio y forzó a muchos sectores
                industriales a adaptarse a las nuevas condiciones sociales.
              </p>
              <span>
                Véase también:&nbsp;
                <a href="https://www.imd.org/research-knowledge/digital/reports/digital-vortex-2023-report/">
                  La transformación digital en tiempos de pandemia
                </a>
              </span>
              <p>
                La pandemia&nbsp;
                <strong>aceleró rotundamente la transformación digital</strong>,
                ya sea <strong>durante y luego</strong> de la misma.
              </p>
              <p>
                También podemos mencionar los siguientes&nbsp;
                <strong>
                  factores que impulsan a las organizaciones a realizar una
                  transformación digital
                </strong>
                :
              </p>
              <p>
                <ul>
                  <li>Sector industrial</li>
                  <li>Adopción de la tecnología</li>
                  <li>Políticas gubernamentales</li>
                </ul>
              </p>
              <h2 className="section-heading">
                ¿Qué tan digitalizas están las organizaciones en Tawián y en el
                mundo?
              </h2>
              <p>
                <strong>
                  <em>
                    Cerca del 72% de las empresas de Taiwán y el 64% de las
                    empresas de todo el mundo declararon que no están haciendo
                    nada o no están seguras de qué hacer.
                  </em>
                </strong>
              </p>
              <blockquote class="blockquote">
                - Claramente las organizaciones que se enfocan en la
                transformación digital están obteniendo una gran ventaja
                competitiva frente a las demás organizaciones del sector. -
              </blockquote>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default page;

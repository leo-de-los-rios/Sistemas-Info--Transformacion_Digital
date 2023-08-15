import PageHeader from "@/components/PageHeader";
import Image from "next/image";

import futuras_economias_bg from "@/assets/img/futuras_economias/futuras-economias-bg.jpg";
import image_1 from "@/assets/img/futuras_economias/futuras-economias-1.jpg";
import image_2 from "@/assets/img/futuras_economias/futuras-economias-2.jpg";

function page() {
  return (
    <>
      <PageHeader
        postHeading="¿Cómo afecta la Transformación Digital en las Economías Actuales?"
        subheading="Impacto de la transformación digital en las economías
                  digitales en el año 2023."
        meta={
          <>
            Extraído de&nbsp;
            <a href="https://forbescentroamerica.com/2023/06/29/la-transformacion-digital-es-esencial-para-el-desarrollo-de-las-futuras-economias-digitales-2">
              La transformación digital es esencial para el desarrollo de las
              futuras economías digitales
            </a>
          </>
        }
        backgroundImage={futuras_economias_bg.src}
      />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                <em>
                  La tecnología está impulsando una transformación significativa
                  dentro del <strong>sector público</strong>, lo que permite el
                  desarrollo de economías digitales y la&nbsp;
                  <strong>
                    prestación de mejores servicios para los ciudadanos
                  </strong>
                  .
                </em>
              </p>
              <blockquote class="blockquote">
                Ante la creciente digitalización, las estrategias
                gubernamentales tratan de acelerar la diversificación económica,
                promover la sostenibilidad y garantizar un mejor futuro para los
                ciudadanos.
              </blockquote>
              <p>
                Esto realmente, a mi parecer no es así. El sector público avanza
                muy lento en la transformación digital, al menos en Argentina.
                Además, la implementación de más tecnologías en una organización
                provoca que se eliminen puestos de trabajo y en el sector
                público no lo ven aplicable. Sumado a la burocracia del mismo.
              </p>
              <p>
                Año tras año incrementa el presupuesto destina do a las
                Tecnologías de la Información (IT). En el año 2023 incrementó un
                6.8% con respecto al presupuesto del año anterior en todo el
                mundo.
              </p>
              <a href="#">
                <Image
                  className="img-fluid"
                  src={image_1}
                  alt="Industria de Papel Higiénico sin empleados"
                />
              </a>
              <span className="caption text-muted">
                Industria de Papel Higiénico sin empleados.
              </span>
              <a href="#">
                <Image
                  className="img-fluid"
                  src={image_2}
                  alt="Programadores desarrollando software"
                />
              </a>
              <span className="caption text-muted">
                Programadores desarrollando software.
              </span>
              <h2 className="section-heading">
                ¿América Latina tiene infraestructura para implementar nuevas
                tecnologías?
              </h2>
              <strong>
                Actualmente la mayoría de países de Latinoamérica no tiene la
                infraestructura necesaria.&nbsp;
                <strong>
                  Si se implementaran nuevas infraestructuras, podría
                  incrementar las ganancias entre un 2% y un 17% del PIB
                  (Producto Bruto Interno).
                </strong>
              </strong>
              <h2 className="section-heading">
                ¿Qué ventajas daría implementar transformaciones digitales en un
                país?
              </h2>
              <p>
                Si los gobernantes de los países se enfocaran en progresar con
                respecto a las transformaciones digitales mediante
                colaboraciones con el sector privado, permitirían&nbsp;
                <strong>
                  asegurar un futuro viable para sus ciudadanos al tiempo que
                  aumentan su competitividad nacional en el escenario global
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default page;

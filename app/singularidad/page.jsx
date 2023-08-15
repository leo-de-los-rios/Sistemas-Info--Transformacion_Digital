import PageHeader from "@/components/PageHeader";
import Image from "next/image";

import singularidad_bg from "@/assets/img/singularidad/singularidad-bg.jpg";
import image_1 from "@/assets/img/singularidad/singularidad-1.jpg";
import image_2 from "@/assets/img/singularidad/singularidad-2.jpg";
import image_3 from "@/assets/img/singularidad/singularidad-3.jpg";

function page() {
  return (
    <>
      <PageHeader
        postHeading="Singularidad Tecnológica"
        subheading="Cómo afecta la singularidad Tecnológica en la vida de los seres humanos."
        meta={
          <>
            Extraído de&nbsp;
            <a href="https://www.astra-castra.com/en/post/the-technological-singularity">
              La Singularidad (tecnológica).
            </a>
          </>
        }
        backgroundImage={singularidad_bg.src}
      />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h2 className="section-heading">
                ¿Qué es la Singularidad Tecnológica?
              </h2>
              <p>
                La singularidad tecnológica es el{" "}
                <strong>
                  momento hipotético en el que nuestra tecnología ya no va a
                  necesitar del aporte humano para mejorarse
                </strong>
                . Cuando eso suceda, la reacción en cadena que tendrá lugar hará
                que <strong>la tecnología avance exponencialmente</strong>, tal
                vez incluso más allá de nuestro control, convirtiendo a las
                máquinas en la forma de vida dominante en la Tierra (ya son la
                especie dominante en Marte).
              </p>
              <a href="#">
                <Image
                  className="img-fluid"
                  src={image_1}
                  alt="Robot Asimo desarrollado por Honda en el año 2000"
                />
              </a>
              <span className="caption text-muted">
                Robot Asimo desarrollado por Honda en el año 2000.
              </span>
              <h2 className="section-heading">
                ¿En qué se destacan las máquinas?
              </h2>
              <p>
                Las máquinas son excelentes para{" "}
                <strong>tareas repetitivas</strong>, como trabajo de fábrica,
                hacer coincidir patrones o seguir instrucciones específicas
                mientras hacen millones de cálculos, esto se llama algoritmo.
                Cuando estas instrucciones incluyen{" "}
                <strong>
                  seleccionar los mejores resultados y excluir los peores
                </strong>
                , se denomina <strong>algoritmo genético</strong>.
              </p>
              <a href="#">
                <Image
                  className="img-fluid"
                  src={image_2}
                  alt="ChatGPT y la evolución de la IA"
                />
              </a>
              <span className="caption text-muted">
                ChatGPT y la evolución de la IA.
              </span>
              <h2 className="section-heading">
                Tipos de Inteligencia Artificial
              </h2>
              <p>
                Existen 3 tipos de IA. Las <strong>IA estrechas</strong> son las
                más comunes y están programadas para realizar una sola tarea. El
                segundo tipo son las <strong>IA generales</strong>, tienen un
                nivel de cognición similar al humano y, en teoría, pueden
                aprender y realizar cualquier cantidad de tareas. Estos aún no
                están aquí, requerirían una serie de IA estrechas para
                vincularse entre sí para poder imitar la cognición humana. Luego
                están las <strong>Súper IA</strong>, que superan todas las
                capacidades humanas, de lo que serían capaces, es el reino de la
                ciencia ficción.
              </p>
              <a href="#">
                <Image
                  className="img-fluid"
                  src={image_3}
                  alt="Robots con apariencia humana"
                />
              </a>
              <span className="caption text-muted">
                Robots con apariencia humana.
              </span>
              <p>
                ¿Qué sucede cuando los malos también tienen IA? Tal vez el
                peligro no es que la IA se vuelva contra nosotros, sino que los
                volvamos unos contra otros. Con cada nuevo avance tecnológico,
                siempre hay alguien que descubre{" "}
                <strong>cómo usarlo de forma maliciosa</strong>.
              </p>
              <blockquote class="blockquote">
                - Hay que usar la tecnología con{" "}
                <strong>RESPONSABILIDAD</strong> -
              </blockquote>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default page;

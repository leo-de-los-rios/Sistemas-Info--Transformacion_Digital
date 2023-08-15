import PageHeader from "@/components/PageHeader";
import Image from "next/image";

import nuevas_tecnologias_bg from "@/assets/img/nuevas_tecnologias/nuevas-tecnologias-bg.jpg";
import image_1 from "@/assets/img/nuevas_tecnologias/nuevas-tecnologias-1.jpg";
import image_5 from "@/assets/img/nuevas_tecnologias/nuevas-tecnologias-5.jpg";
import image_6 from "@/assets/img/nuevas_tecnologias/nuevas-tecnologias-6.jpg";

function page() {
  return (
    <>
      <PageHeader
        postHeading="Nuevas Tecnologías Digitales"
        subheading="Desarrollo, implementación y tendencias de nuevas tecnologías digitales."
        meta={
          <>
            Extraído de&nbsp;
            <a href="https://forbescentroamerica.com/2022/03/16/transformacion-digital-2">
              Tendencias de transformación digital. Tendencias 2022 en las
              empresas.
            </a>
          </>
        }
        backgroundImage={nuevas_tecnologias_bg.src}
      />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h2 className="section-heading">Trabajo a Distancia.</h2>
              <p>
                Hoy en día los trabajadores no tienen que estar obligatoriamente
                en el lugar de trabajo,&nbsp;
                <strong>
                  pueden trabajar de forma remota desde cualquier lugar
                </strong>
                &nbsp;mientras su labor se lo permita
              </p>
              <a href="#">
                <Image
                  className="img-fluid"
                  src={image_5}
                  alt="Trabajos a Distancia"
                />
              </a>
              <span className="caption text-muted">Trabajos a Distancia.</span>
              <h2 className="section-heading">Educación Remota.</h2>
              <p>
                No simplemente los trabajos son a distancia, ahora también la
                educación es a distancia.
              </p>
              <a href="#">
                <Image
                  className="img-fluid"
                  src={image_1}
                  alt="Estudiantes Trabajando a Distancia"
                />
              </a>
              <span className="caption text-muted">
                Estudiantes Trabajando a Distancia.
              </span>
              <h2 className="section-heading">Voto Electrónico.</h2>
              <p>
                Una de las transformaciones que se debe aplicar es el voto
                electrónico debido a que los votantes estarían más conformes y
                <strong>
                  se resolverían muchos problemas como faltantes de boletas,
                  boletas inválidas y se aceleraría el proceso de conteo de los
                  mismos
                </strong>
                . Aunque se deben resolver problemas como se experimentaron en
                las elecciones del 13 de agosto del 2023 en Argentina,
                específicamente en CABA.
              </p>
              <a href="#">
                <Image
                  className="img-fluid"
                  src={image_6}
                  alt="Votación Electrónica en CABA 2023"
                />
              </a>
              <span className="caption text-muted">
                Votación Electrónica en CABA 2023.
              </span>
              <span>
                Véase también:&nbsp;
                <a href="https://www.pagina12.com.ar/577654-advierten-que-los-inconvenientes-con-el-voto-electronico-era">
                  Advierten que los inconvenientes con el voto electrónico eran
                  una crónica anunciada
                </a>
              </span>
              <h2 className="section-heading">
                Tendencias más destacadas en el 2023.
              </h2>
              <p>
                <ol>
                  <li>
                    <strong>
                      Más inversión en automatización buscando la eficiencia
                    </strong>
                    : implementar mayor cantidad de procesos automatizados.
                    Aumentar la inversión en los mismos para disminuir los
                    costos y aumentar la productividad.
                  </li>
                  <li>
                    <strong>Composabilidad</strong>: fundamental para impulsar
                    agilidad e innovación: capacidad de combinar y reutilizar
                    diferentes componentes o capacidades para crear nuevas
                    soluciones.
                  </li>
                  <li>
                    <strong>
                      Low-code y No-code para usuarios menos tecnológicos, y más
                      automatización
                    </strong>
                    : tener mínimo (low-code) o nulo (no-code) conocimiento para
                    el desarrollo de software, para ello los empleados pueden
                    crear con distintas herramientas aplicaciones sin necesidad
                    de tener los conocimientos específicos.
                  </li>
                  <li>
                    <strong>
                      Inversión en estrategias de experiencia total (TC) para
                      más fidelidad y defensa de clientes y empleados
                    </strong>
                    : enfoque de calidad. Cero defectos.
                  </li>
                  <li>
                    <strong>
                      Más automatización inteligente de toma de decisiones
                      basadas en datos
                    </strong>
                    : análisis en tiempo real de los datos. Logrando la
                    inteligencia de negocios.
                  </li>
                  <li>
                    <strong>
                      Defensas de ciberseguridad más estratificadas e integradas
                    </strong>
                    .
                  </li>
                  <li>
                    <strong>
                      Sostenibilidad como impulso a la inversión continua en IT
                    </strong>
                    : enfoque en el Medio Ambiente.
                  </li>
                </ol>
              </p>
              <h2 className="section-heading">
                Empresas: Tendencias más destacadas en el 2023.
              </h2>
              <p>
                <ul>
                  <li>
                    <strong>Inteligencia de Decisiones</strong>: Comprensión
                    explícita de cómo se toman las decisiones, además de
                    entender&nbsp;
                    <em>
                      cómo se evalúan, gestionan y mejoran los resultados
                      mediante la retroalimentación
                    </em>
                    .
                  </li>
                  <li>
                    <strong>Hiperautomatización</strong>: Se refiere a la
                    ampliación de la&nbsp;
                    <strong>
                      automatización de los procesos empresariales
                    </strong>
                    &nbsp;(cadenas de producción, flujos de trabajo, procesos de
                    marketing…) aplicando herramientas de IA, ML, aprendizaje
                    automático y automatización robótica de procesos (RPA).
                  </li>
                  <li>
                    <strong>Sistemas Autónomos</strong>: Son&nbsp;
                    <strong>sistemas</strong> físicos o de software&nbsp;
                    <strong>
                      autogestionados que aprenden de sus entornos
                    </strong>
                    &nbsp;y que modifican sus propios algoritmos sin una
                    actualización de software externa, lo que les&nbsp;
                    <strong>
                      permite adaptarse rápidamente a las nuevas condiciones del
                      mercado
                    </strong>
                    .
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default page;

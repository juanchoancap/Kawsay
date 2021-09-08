import React, { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

export default function FAQ() {
  const [location, setLocation] = useState("");

  return (
    <div className="cover font-italic text-muted"
    style={{ backgroundImage: `url("http://i.ibb.co/jgZph3V/fondo.png")` }}>
      <div>
        <h2 className="mb-5 text-center">PREGUNTAS FRECUENTES</h2>
        <ListGroup horizontal className="mb-4 shadow text-center">
          <ListGroup.Item
            action
            variant="success"
            onClick={() => setLocation("kawsay")}
          >
            ¿Que es Kawsay?
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="success"
            onClick={() => setLocation("huella")}
          >
            ¿Qué es la Huella de Carbono?
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="success"
            onClick={() => setLocation("proyecto")}
          >
            Proyecto Kawsay
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="success"
            onClick={() => setLocation("equipo")}
          >
            Nuestro Equipo
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        {location === "kawsay" ? (
          <div className="my-1 font-italic">
            <Container className="ml-3 w-50">
              <p className="my-1">
                &#10004; Kawsay significa vida en Quechua, y que mejor nombre
                que para ponerle a un proyecto de desarrollo sustentable,
                Alguien dijo por ahí, que cuando comenzamos a usar calzado,
                perdimos la noción del contacto con la tierra, que somos un
                todo, y desentendernos de ella, significa desentendernos de
                nosotros mismos.
              </p>
            </Container>
          </div>
        ) : (
          <div />
        )}
        {location === "huella" ? (
          <div className="my-1 font-italic">
            <Container className="ml-3 w-50">
              <p className="my-1">
                &#10004; La huella de carbono es uno de estos nuevos términos
                que cada vez están más presentes en nuestra actividad. Se trata
                de un indicador ambiental clave, que refleja los gases emitidos
                por un individuo o empresa. Estos gases que se acumulan en la
                atmósfera son lo que producen el efecto invernadero. Es el
                impacto que deja la actividad humana sobre el medio ambiente. Es
                decir, la marca ambiental que genera una persona, producto u
                organización sobre el planeta debido a sus acciones diarias,
                totalizadas según parámetros de emisiones de dióxido de carbono
                (CO2) y otros gases de efecto invernadero (GEI) liberadas a la
                atmósfera.
              </p>
            </Container>
          </div>
        ) : (
          <div />
        )}
        {location === "proyecto" ? (
          <div className="my-1 font-italic">
            <Container className="ml-3 w-50">
              <p className="my-1">
                &#10004; El proyecto Kawsay, nace como una idea gestionada en
                JCI Buenos Aires, para dar una solución al problema de
                deforestación y la poca sustentabilidad ambiental que tiene
                nuestra vida actual, pensada como una plataforma donde informar,
                crear conciencia, y poder acercar herramientas como la
                reforestación de espacios verdes urbanos para mitigar nuestra
                huella de carbono.
              </p>
            </Container>
          </div>
        ) : (
          <div />
        )}
        {location === "equipo" ? (
          <div className="my-1 font-italic">
            <Container className="ml-3 w-50">
              <p className="my-1">
                &#10004; El proyecto Kawsay, nace como una idea gestionada en
                JCI Buenos Aires, para dar una solución al problema de
                deforestación y la poca sustentabilidad ambiental que tiene
                nuestra vida actual, pensada como una plataforma donde informar,
                crear conciencia, y poder acercar herramientas como la
                reforestación de espacios verdes urbanos para mitigar nuestra
                huella de carbono.
              </p>
            </Container>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

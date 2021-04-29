import React, { useState } from "react";

export default function FAQ() {
  const [location, setLocation] = useState("");

  return (
    <div>
      <div>
        <h2>Preguntas Frecuentes</h2>
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
                &#10004; Mira si voy a empatizar con todos me tengo que pegar un
                tiro. El sufrimiento y la muerte esta en todos lados.
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

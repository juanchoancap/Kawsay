import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function EcoAdvice() {
  const [location, setLocation] = useState("");
  const { push } = useHistory();
  return (
    <div>
      <div>
        <div>
          <h1>RECOMENDACIONES PARA REDUCIR LA HUELLA DE CARBONO</h1>
        </div>
        <div onClick={() => setLocation("energia")}>
          <h2>Uso racional de la energía</h2>
        </div>
        <div>
          <h2 onClick={() => setLocation("movilidad")}>Movilidad</h2>
        </div>
        <div>
          <h2 onClick={() => setLocation("residuos")}>Residuos</h2>
        </div>
        <div>
          <h2 onClick={() => setLocation("alimentacion")}>Alimentación</h2>
        </div>

        <div>
          <h2 onClick={() => setLocation("arboles")}>Plantá árboles</h2>
        </div>
      </div>
      <div>
        {location === "energia" ? (
          <div>
            <ul>
              <li>Priorizá el uso de iluminación natural.</li>
              <li>Apagá la luz cuando salgas de cada ambiente.</li>
              <li>
                Elegí lámparas LED, tienen mayor vida útil y consumen menos
                energía.
              </li>
              <li>
                Desconectá aparatos electrónicos y cargadores cuando no los
                estés usando.
              </li>
              <li>Evitá dejar artefactos eléctricos en suspensión.</li>
              <li>
                Poné el aire en 24 grados en el verano y 20 en el invierno.
              </li>
              <li>Elegí electrodomésticos de eficiencia energética A.</li>
              <li>
                Cuando uses el lavarropas o lavavajillas, usalos con carga
                completa y así aprovechas el máximo de su capacidad.
              </li>
              <li>
                Evitá dejar abierta la puerta de la heladera por un tiempo
                prolongado.
              </li>
              <li>
                Evitá usar el ascensor, siempre que puedas usá las escaleras.
              </li>
              <li>
                Repará las pérdidas en canillas o sanitarios, para evitar el uso
                intensivo de bombas.
              </li>
              <li>Date baños cortos, preferiblemente en ducha.</li>
            </ul>
          </div>
        ) : (
          <div />
        )}
        {location === "movilidad" ? (
          <div>
            <ul>
              <li>
                Siempre que puedas y la distancia lo permita, usá la bici.
              </li>
              <li>Usá transporte público.</li>
              <li>Si usas auto particular:</li>
              <li>
                Limitá su uso para viajes sin acceso por medio de transporte
                público o bicicleta.
              </li>
              <li>
                Compartí el auto con otros compañeros de trabajo, familiares o
                vecinos que viajen cerca.
              </li>
              <li>
                Manejá evitando superar las 2000 revoluciones, para reducir el
                consumo de combustible.
              </li>
              <li>
                Chequeá la presión de las cubiertas, circular con la presión
                correcta evita el consumo innecesario de combustible.
              </li>
              <li>
                Realizá los controles recomendados para un funcionamiento
                eficiente.
              </li>
              <li>Organizá tu recorrido para recorrer menor distancia.</li>
            </ul>
          </div>
        ) : (
          <div />
        )}
        {location === "residuos" ? (
          <div>
            <ul>
              <li>
                Reducí: evitá la generación innecesaria de residuos. Para ello
                podés evitar comprar productos con mucho envoltorio, disminuir
                las impresiones, o imprimir doble faz. En el caso de los
                residuos de cocina, calculá las cantidades de comidas para
                evitar tirar sobras, y organizá las comidas para que no lleguen
                a vencerse los productos.
              </li>
              <li>
                Reutilizá: re-aprovechá los residuos. Si hay hojas impresas
                simple faz que no usás más, utilizalas para notas; transformá
                las sobras de la comida en nuevos platos.
              </li>
              <li>
                Separá: para que se pueda dar el proceso industrial de reciclado
                y generar nuevos recursos, es necesario, entre otras
                condiciones, que todos separemos los residuos húmedos de los
                secos en nuestras casas.
              </li>
              <li>
                Compostá: Una opción para reducir la generación de residuos es
                el compostaje que resulta en una tierra con buenas propiedades
                en calidad y nutrientes.
              </li>
            </ul>
          </div>
        ) : (
          <div />
        )}
        {location === "alimentacion" ? (
          <div>
            <ul>
              <li>
                Se calcula que un 20% de los gases de efecto invernadero se
                deben a la elaboración y comercialización de alimentos. Hay que
                fijarse primero en qué comemos y de dónde viene lo que comemos.
              </li>
              <li>
                Intentá consumir productos locales, ya que tienen una
                elaboración de menor impacto ambiental dada la proximidad, y por
                otro lado, son más frescos y se ayuda a potenciar la economía
                local.
              </li>
              <li>Reducí el consumo de carnes.</li>
              <li>
                Evitá consumir alimentos que requieran un complejo envasado.
              </li>
            </ul>
          </div>
        ) : (
          <div />
        )}
        {location === "arboles" ? (
          <div>
            Los árboles retienen CO2, un árbol elimina entre 350 y 3.500 kg. de
            CO2 aproximadamente en toda su vida, por ello impulsar la plantación
            de nuevos árboles, en especial especies autóctonas, contribuye a
            reducir la huella de carbono. Te interesaría ser parte del cambio?
            Podemos ayudarte
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

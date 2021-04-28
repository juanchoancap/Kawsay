import React from "react";
import { Button, Form } from "react-bootstrap";

const Newsletter = () => {
  return (
    <>
    <div className ="cover" style={{backgroundImage: `url("http://i.ibb.co/jgZph3V/fondo.png")`}}>
      <div className="ml-5">
        <Form
          method="post"
          action="https://ymlp.com/subscribe.php?id=gyuwbbegmgj"
        >
          <h2 className="mt-2 parH">¡Complete su dirección de email
           <br />para recibir nuestra newsletter!
          </h2>
          <div className="ml-4">
            <h5 className="mt-5 parH">Dirección de Email
              <input className="ml-3 rounded" type="email" name="YMP0" placeholder="Ingrese su email aqui" size={20} />
            </h5>            
            <Button className="ml-5 mt-1" variant="flat" type="submit" value="Enviar">Enviar</Button>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
};

export default Newsletter;
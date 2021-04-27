import React from "react";
import { Form } from "react-bootstrap";

const Newsletter = () => {
  return (
    <>
    <div>
      <div>
        <Form
          method="post"
          action="https://ymlp.com/subscribe.php?id=gyuwbbegmgj"
        >
          <table border={0} align="center" cellSpacing={0} cellPadding={5}>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <font size={2} face="verdana,geneva">
                    ¡Complete su dirección de email
                    <br />
                    para recibir nuestra newsletter!
                  </font>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <font size={2} face="verdana,geneva">
                    Dirección de Email:
                  </font>
                </td>
                <td valign="top">
                  <input type="text" name="YMP0" size={20} />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input type="submit" defaultValue="Enviar" />
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </div>
    </div>
    </>
  );
};

export default Newsletter;
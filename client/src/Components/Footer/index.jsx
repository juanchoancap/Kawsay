import { Container } from "react-bootstrap";
import LogoJCIComponent from "./LogoJCI/LogoJCI";

const FooterComponent = () => {
    return (
        <>
        <footer className="footerColor fixed-bottom mt-5 py-1 page-footer text-white">
            <Container fluid>
                <div className="footer-copyright text-center py-3">
                &copy; 2021 JCI: Proudly created by Santiago Riveros Jasis, Joaquin Palacios, Roxana Giraud, Silvina Zarate
                <span>
                    <LogoJCIComponent />
                </span>
                </div>
            </Container>
        </footer>
        </>
    );
};
export default FooterComponent;
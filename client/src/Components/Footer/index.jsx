import { Container } from "react-bootstrap";

const FooterComponent = () => {
    return (
        <>
        <footer className="footerColor fixed-bottom mt-5 py-1 page-footer text-white">
            <Container fluid>
                <div className="footer-copyright text-center py-2">
                &copy; 2021 JCI: Proudly created by Santiago Riveros Jasis, Joaquin Palacios, Roxana Giraud, Silvina Zarate                
                </div>
            </Container>
        </footer>
        </>
    );
};
export default FooterComponent;
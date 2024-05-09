import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";

function Accordion1() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>HiSEOUL Exhibition</h3>
          </Accordion.Header>
          <Accordion.Body style={{ fontSize: "25px" }}>
            If you enjoyed cultural activities such as attending exhibitions in
            your home country,
            <br />
            you might find yourself increasingly wanting to explore the various
            art-related exhibitions happening in Korea as you become more
            accustomed to life there.
            <br />
            We will assist you in finding information about exhibitions. By
            clicking on a poster of an exhibition you're interested in, you can
            obtain related information.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Accordion1;

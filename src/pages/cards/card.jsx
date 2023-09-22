import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const cards = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap", // Apply flex-wrap to allow Card components to wrap
          justifyContent: "center",
        }}
      >
        <div style={{ width: "350px", height: "300px" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/wjRW5Qtz/boplang.jpg"
              style={{ width: "150px", height: "150px" }} // Set the width and height here
            />
            <Card.Title>Ortuseight</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Beli</Button>
          </Card.Body>
        </div>
        <div style={{ width: "350px", height: "300px" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/wjRW5Qtz/boplang.jpg"
              style={{ width: "150px", height: "150px" }}
            />
            <Card.Title>Ortuseight</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Beli</Button>
          </Card.Body>
        </div>
        <div style={{ width: "350px", height: "300px" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/wjRW5Qtz/boplang.jpg"
              style={{ width: "150px", height: "150px" }}
            />
            <Card.Title>Ortuseight</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Beli</Button>
          </Card.Body>
        </div>
        <div style={{ width: "350px", height: "300px" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/k5mQdR0k/cucuguk.jpg"
              style={{ width: "150px", height: "150px" }}
            />
            <Card.Title>Ortuseight</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Beli</Button>
          </Card.Body>
        </div>
        <div style={{ width: "350px", height: "300px" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/k5mQdR0k/cucuguk.jpg"
              style={{ width: "150px", height: "150px" }}
            />
            <Card.Title>Ortuseight</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Beli</Button>
          </Card.Body>
        </div>
        <div style={{ width: "350px", height: "300px" }}>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/k5mQdR0k/cucuguk.jpg"
              style={{ width: "150px", height: "150px" }}
            />
            <Card.Title>Ortuseight</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Beli</Button>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default cards;

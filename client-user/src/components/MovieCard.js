import { Card, Button, Col } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Col className="mt-5" key={movie.id}>
      <Card
        className="justify-content-center h-100"
        style={{ width: "10rem", backgroundColor: "#546e7a" }}
      >
        <Card.Img
          className="d-flex align-items-center justify-content-center hover-zoom"
          variant="top"
          style={{ height: 230 }}
          src={movie.imageUrl}
        />

        <Card.Body className="text-sm-center align-items-center d-flex justify-content-center flex-column">
          {/* <Card.Title className="font-weight-light mb-0 align-items-center d-flex justify-content-center ">
            {movie.title}
          </Card.Title>
          <Card.Title className="font-weight-light mb-0 align-items-center d-flex justify-content-center ">
            Rating: {movie.rating}
          </Card.Title> */}
          {/* <Button variant="dark">Detail</Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;

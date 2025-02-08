import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EBOOK_URL =
  "https://aitrendsnow.github.io/aitrends.now/ebooks/mastering-deepseek.pdf"; // Hosted on GitHub

const EbookDownload = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email) return;

    // Simulate form submission process
    setSubmitted(true);

    // Open the download link automatically
    window.open(EBOOK_URL, "_blank");
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <div>
            <Modal.Title>Get the Free eBook</Modal.Title>
            <p className="mt-2 text-muted" style={{ fontSize: "0.9rem" }}>
              Thank you for being here. Our love for tech brought us here!
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          ) : (
            <>
              <p>Thank you, {name}! Your eBook is downloading now.</p>
              <a href={EBOOK_URL} target="_blank" className="btn btn-success">
                Click here if your download doesn’t start automatically
              </a>
            </>
          )}
        </Modal.Body>
      </Modal>
      <button
        type="button"
        className="d-none"
        onClick={() => setShow(true)}
        id="ebook-download-trigger"
      ></button>
    </>
  );
};

export default EbookDownload;

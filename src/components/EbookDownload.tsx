import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyGuN3NPpHzE3QsQreJU1Q5HjbPdowhWCpaThXoGwhI8U8ait61CAfxdA4imk_9EZwi/exec";

const EbookDownload = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email) return;

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.text();
      if (result === "success") {
        setSubmitted(true);

        // Trigger the download automatically
        const link = document.createElement("a");
        link.href = "/aitrends.now/ebook.pdf"; // Replace with the actual eBook file path
        link.download = "ebook.pdf"; // File name for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* Modal for name and email input */}
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
              <p>Thank you, {name}! Your email has been submitted.</p>
              <a
                href="/aitrends.now/ebook.pdf"
                download
                className="btn btn-success"
              >
                Click here to download your eBook
              </a>
            </>
          )}
        </Modal.Body>
      </Modal>
      {/* Hidden trigger to open modal */}
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

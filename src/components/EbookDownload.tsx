import { useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";

const EBOOK_DOWNLOAD_URL =
  "https://github.com/user-attachments/files/18716974/Mastering.DeepSeek_.Unleashing.Hidden.Features.Secret.Tricks.Powerful.Prompts.pdf";

const LOGO_PATH = "images/favicon.png";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwdxHQPMbZex_dnHJtozGMLdvAIc_TOxqDkXMSn7X0iD91Tj4p9aUiUnwL2AaJ47U3QZg/exec";

const EbookDownload = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email) return;

    try {
      setSubmitted(true);

      // Send data to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: { "Content-Type": "application/json" },
      });

      // Trigger file download
      const link = document.createElement("a");
      link.href = EBOOK_DOWNLOAD_URL;
      link.download = "MasteringDeepSeek.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header
          closeButton
          className="d-flex flex-column align-items-center pt-3"
        >
          <div className="d-flex align-items-center mb-2">
            <Image
              src={LOGO_PATH}
              alt="Ai Trends Logo"
              height={40}
              className="me-3"
            />
            <Modal.Title className="fw-bold fs-5">
              Get Your Free eBook
            </Modal.Title>
          </div>
          <p className="small text-muted text-center">
            Thank you for being here. Our love for tech brought us here!
          </p>
        </Modal.Header>
        <Modal.Body>
          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-4">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          ) : (
            <div className="text-center">
              <p className="mb-3">
                Thank you, {name}! Your eBook is being downloaded now.
              </p>
            </div>
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

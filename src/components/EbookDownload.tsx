import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// ✅ GitHub Releases direct download link (update with your actual link)
const EBOOK_DOWNLOAD_URL =
  "https://github.com/user-attachments/files/18716974/Mastering.DeepSeek_.Unleashing.Hidden.Features.Secret.Tricks.Powerful.Prompts.pdf";

const EbookDownload = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email) return;

    try {
      // ✅ No need to upload PDF, just download it directly
      setSubmitted(true);

      // ✅ Trigger automatic download
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
              <p>Thank you, {name}! Your eBook is being downloaded now.</p>
              <a href={EBOOK_DOWNLOAD_URL} download className="btn btn-success">
                Click here to download your eBook
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

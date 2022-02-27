import React from "react";
import TextCenter from "../components/shared/TextCenter";
import ToolTip from "../components/ToolTip";

function ContactSection() {
  const handleSubmit = e => {
    e.preventDefault();
    alert("Form submited");
  };

  return (
    <section id="contact">
      <div className="container-lg">
        <TextCenter
          heading={"Get In Touch"}
          text={"Question to ask? Fill out the form to contact me directly..."}
        />
        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="form-label">
                Email address:{" "}
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="e.g someone@example.com"
                />
                <span className="input-group-text">
                  <ToolTip
                    placement={"bottom"}
                    text={"Enter an email address we can reply to."}
                  >
                    <i className="bi bi-question-circle text-muted"></i>
                  </ToolTip>
                </span>
              </div>

              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="e.g Someone"
                />
                <span className="input-group-text">
                  <ToolTip placement={"bottom"} text={"Enter your full name"}>
                    <i className="bi bi-question-circle text-muted"></i>
                  </ToolTip>
                </span>
              </div>

              <label htmlFor="subject" className="form-label">
                What is your question about?
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-chat-left-dots-fill"></i>
                </span>
                <select
                  className="form-select custom-form-select"
                  id="subject"
                  defaultValue={"pricing"}
                >
                  <option value={"pricing"}>Pricing Query</option>
                  <option value="content">Content Query</option>
                  <option value="other">Other Query</option>
                </select>
              </div>

              <div className="form-floating  my-4">
                <textarea
                  style={{ height: "140px" }}
                  className="form-control"
                ></textarea>
                <label>Your query...</label>
              </div>
              <div className="mb-4 text-center">
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

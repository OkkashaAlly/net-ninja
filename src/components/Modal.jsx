import React from "react";

function Modal() {
  return (
    <>
      {/* modal  */}
      <div
        className="modal fade"
        id="reg-modal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Get the latest updates</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia eius ducimus vel. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
              <label htmlFor="modal-email" className="form-label">
                Email:{" "}
              </label>
              <input
                type="text"
                id="modal-email"
                className="form-control"
                placeholder="e.g someone@gmail.com"
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

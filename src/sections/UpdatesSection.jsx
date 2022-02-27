import React from "react";
import TextCenter from "../components/shared/TextCenter";

function UpdatesSection() {
  return (
    <section id="updates" className="bg-light">
      <div className="container-lg">
        <TextCenter
          heading={"Stay In The Loop"}
          text={"Get the latest updates as they happens"}
        />
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <p className="text-muted my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptas ut sint deleniti esse in veritatis illo possimus, nisi
              inventore.
            </p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#reg-modal"
            >
              Register for updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;

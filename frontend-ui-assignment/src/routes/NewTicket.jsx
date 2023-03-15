import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperclip } from "react-icons/fa";
import { Footer, Menu, Navbar } from "../components";

const NewTicket = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-row">
        <Menu value="New Ticket" />
        <div className="flex-column flex-grow">
          <div className="content-container flex-column gap-medium ">
            <p className="text-center size-heading">Create New Ticket</p>
            <div className="new-ticket-content flex-column gap-medium">
              <div className="child1 flex-row flex-align-items-center flex-space-between">
                <div className="flex-column gap-small">
                  <div>
                    <label>Ticket No.:</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Name:</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="flex-column gap-small">
                    <div>
                  <label>Date:</label>
                  <input type="text" />
                  </div>
                  <div>
                  <label>Department:</label>
                  <input type="text" />
                  </div>
                </div>
              </div>

              <div className="child-2 flex-column gap-small">
                <label>Subject:</label>
                <input type="text" className="full-width"/>
              </div>

              <div className="child-3 flex-row gap-large">
                <div className="flex-column gap-small flex-grow">
                  <div className="flex-column gap-small">
                    <label>Category:</label>
                    <input type="text" className="full-width" />
                  </div>
                  <div className="flex-column gap-small">
                    <label>Type:</label>
                    <input type="text" className="full-width" />
                  </div>
                  <div className="flex-column gap-small">
                    <label>Priority:</label>
                    <input type="text" className="full-width" />
                  </div>
                </div>
                <div className="flex-column gap-small flex-grow-2 parent-position">
                  <label>Description:</label>
                  <textarea type="text" className="full-width full-height"/>
                  <button className="child-position attach-btn"><FaPaperclip size={25} /></button>
                </div>
              </div>
              <div className="child-4 flex-row flex-space-between flex-align-end">
                <ReCAPTCHA sitekey="6LezVf4kAAAAALXwO6A2q5031A-PGxSXweq6Ize5" className="recaptcha"/>
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export { NewTicket };

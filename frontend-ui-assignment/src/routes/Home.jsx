import React from "react";
import { Footer, Menu, Navbar, TicketCard } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-row">
        <Menu value="Dashboard" />
        <div className="flex-column">
          <div className="content-container flex-column flex-align-items-center gap-large">
            <p className="text-center size-heading">Dashboard</p>
            <div className="tickets flex-row  flex-wrap gap-medium flex-justify-content-center flex-align-items-center ">
            <TicketCard
              bgColor="var(--ticket-blue)"
              heading="Total Ticket"
              number="12"
            />
            <TicketCard
              bgColor="var(--ticket-green)"
              heading="Total Solved"
              number="8"
            />
            <TicketCard
              bgColor="var(--ticket-red)"
              heading="Total Awaiting Approval"
              number="2"
            />
            <TicketCard
              bgColor="var(--ticket-yellow)"
              heading="Total in Progress"
              number="2"
            />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export { Home };

import React from "react";
import { FaSearch } from "react-icons/fa";
import { Footer, Menu, Navbar, TicketListCard } from "../components";
import ticketList from "../data/ticket-list";

const MyTicket = () => {
     const entries = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  
  return (
    <div>
      <Navbar />
      <div className="flex-row">
        <Menu value="My Ticket" />
        <div className="flex-column flex-grow ">
          <div className="content-container flex-column gap-medium ">
            <p className="text-center size-heading">List of Ticket</p>
            <div className="my-ticket-content flex-column gap-medium">
              <div className="parent-position ">
                <input type="text" placeholder="Find Ticket" />
                <FaSearch className="child-position search-icon" />
              </div>

              <div>
                <label for="entries" className="entries-label">Show:</label>
                <select id="entries" name="entries" >
                    {entries.map(entry => {
                       return (<option key={entry} value={entry} defaultValue={'10'}>{entry}</option>)
                    })}
                </select>
                Entries
              </div>

              <div>
                <TicketListCard data={ticketList}/>
              </div>
              <div>
              <p>Showing 1 to 5 of 5 entries</p>
              <p></p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export { MyTicket };

import React from "react";
import RightArrow from "../asset/rightArrow.svg";
import MyTicket from "../asset/myTicket.svg";
import NewTicket from "../asset/newTicket.svg";
import DashboardIcon from "../asset/dashboardIcon.svg";
import { Link } from "react-router-dom";

const Menu = ({value}) => {
  return (
    <section>

      <div className="side-menu-container flex-row flex-align-start gap-small">
        <img src={RightArrow} alt="Left Arrow" className={value === "Dashboard" ? '' : (value === "New Ticket" ? 'arrow-padding-small' : 'arrow-padding-large' )} />

        <div className="flex-column gap-medium">
         <Link to="/" className="text-decor-none"> <div className="flex-row gap-small flex-align-items-center">
            <img src={DashboardIcon} alt="Dashboard Icon" />
            <p>Dashboard</p>
          </div>
          </Link>

          <Link to="/new-ticket" className="text-decor-none"> <div className="flex-row gap-small flex-align-items-center">
            <img src={NewTicket} alt="New Ticket Icon" />
            <p>New Ticket</p>
          </div>
          </Link>

          <Link to="/my-ticket" className="text-decor-none"> <div className="flex-row gap-small flex-align-items-center ">
            <img src={MyTicket} alt="My Ticket Icon" />
            <p>My Ticket</p>
          </div>
          </Link>
        </div>

      </div>

    </section>
  );
};

export { Menu };

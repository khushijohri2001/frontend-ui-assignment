import { Rating } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TicketListCard = ({ data }) => {
  return (
    <div className="ticket-list-card">
      <Container className="flex-column gap-medium ">
        <Row className="text-center titles">
          <Col>Ticket No.</Col>
          <Col>Subject</Col>
          <Col>Status</Col>
          <Col>Support by</Col>
          <Col>Date</Col>
          <Col>Rate</Col>
        </Row>
        <div>
        {data.map((details, index) => {
          const { ticket_no, subject, status, support_by, date, rate } =
            details;
          console.log(details);
          return (
            <Row
              className={`${
                index % 2 === 0 ? "dark-gray-bg" : "light-gray-bg"
              } text-center`}
            >
              <Col>{ticket_no}</Col>
              <Col>{subject}</Col>
              <Col > <div className={(status === 'In Progress' && 'status-in-progress') || (status === 'On Hold' && 'status-on-hold') || (status === 'Closed' && 'status-closed')}>
                {status}
                </div>
                </Col>
              <Col>{support_by}</Col>
              <Col>{date}</Col>
              <Col>
              <Rating name="read-only" value={rate} readOnly />
              </Col>
            </Row>
          );
        })}
        </div>
      </Container>
    </div>
  );
};

export { TicketListCard };

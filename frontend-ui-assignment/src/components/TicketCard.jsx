import React from 'react'

const TicketCard = ({bgColor, number, heading}) => {
  return (
    <div>
        <div style={{backgroundColor: bgColor}} className="ticket-card flex-column flex-align-items-center flex-space-between">
            <p className='text-center'>{heading}</p>
            <p className='number '>{number}</p>
        </div>
    </div>
  )
}

export {TicketCard};
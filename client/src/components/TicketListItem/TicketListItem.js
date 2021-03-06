// components/TicketListItem/TicketListItem.js

import React from 'react'
import PropTypes from 'prop-types'

import Divider from 'material-ui/Divider'
import { ListItem, ListItemText } from 'material-ui/List'

import './TicketListItem.scss'

const TicketListDivider = ({ index }) => (
  index !== 0 ? (
    <Divider inset />
  ) : (
    null
  )
)

//States: inactive (left), red (overdue), yellow(unpaid, not overdue), green(paid, not overdue)

const TicketListItem = ({ ticket, index }) => (
  <div className="ticket-list-item">
    <TicketListDivider index={index} />
    <ListItem
      key={ticket.id}
      button
      disabled={!ticket.active}
    >
      <ListItemText
        primary={`Ticket #${ticket.id}`}
        secondary={`
          in lot: ${!!ticket.active}, 
          paid: ${!!ticket.paid},
          owing: ${ticket.owed ? ticket.owed : 0}
        `}
      />
    </ListItem>
  </div>
)

TicketListItem.propTypes = {
  ticket: PropTypes.object.isRequired
}

export default TicketListItem

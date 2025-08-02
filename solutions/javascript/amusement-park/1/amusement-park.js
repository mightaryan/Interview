
export function createVisitor(name, age, ticketId) {
  
    return {
        "name": name,
        "age": age,
        "ticketId": ticketId

    }
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;

}


export function ticketStatus(tickets, ticketId) {
    if(tickets.hasOwnProperty(ticketId)) {
        if(tickets[ticketId] === null) {
            return "not sold";
        } else {
            return "sold to " + tickets[ticketId];
        }
    } else {
        return "unknown ticket id";
    }
}



export function simpleTicketStatus(tickets, ticketId) {
    if (tickets[ticketId] !== null && tickets[ticketId] !== undefined) {
        return tickets[ticketId];
    } else {
        return 'invalid ticket !!!';
    }
}


export function gtcVersion(visitor) {
      if (visitor.gtc && visitor.gtc.version !== undefined) {
        return visitor.gtc.version;
    }
}
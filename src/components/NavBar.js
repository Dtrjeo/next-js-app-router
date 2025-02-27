/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function NavBar() {
  // const { user } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Ticket Republic</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-link" href="/rsvps">
              RSVPS
            </Link>
            <Link className="nav-link" href="/venues">
              My Venues
            </Link>
            <Link className="nav-link" href="/events">
              My Events
            </Link>
            <Link className="nav-link" href="/venues/edit/new">
              Create Venue
            </Link>
            <Link className="nav-link" href="/events/new">
              Create Event
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

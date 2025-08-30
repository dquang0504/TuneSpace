import {Button, Container, Nav, Navbar, NavDropdown, NavItem, NavLink} from 'react-bootstrap'
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import '../assets/css/navbar.css'
const NavBar = () => {
    return (
        <Navbar expand="lg" className='custom-navbar'>
            <Container fluid>
                {/* Logo */}
                <Navbar.Brand href='/' className='navbar-logo'>
                    🎵 TuneSpace
                </Navbar.Brand>

                {/* Toggle for mobile */}
                <Navbar.Toggle aria-controls='navbar-nav'></Navbar.Toggle>

                {/* Nav Items */}
                <Navbar.Collapse id='navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href='/home' className='nav-link-custom'>Home</Nav.Link>
                        <Nav.Link href='/browse' className='nav-link-custom'>Browse</Nav.Link>
                        <Nav.Link href='/library' className='nav-link-custom'>Library</Nav.Link>
                        <Nav.Link href='/creators' className='nav-link-custom'>For Creators</Nav.Link>
                        
                        {/* Search Box */}
                        <div className='nav-search-container ms-3'>
                            <FaSearch className='search-icon'></FaSearch>
                            <input type="search" className='nav-search' placeholder='Search music, artist...' />
                        </div>
                    </Nav>

                    {/*User dropdown */}
                    <Nav>
                        <NavDropdown
                            align={"end"}
                            title={ <FaUserCircle size={30} className='user-icon'/> }
                            id='user-dropdown'
                            menuVariant='dark'
                        >
                            <NavDropdown.Item href='/login'>Login</NavDropdown.Item>
                            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
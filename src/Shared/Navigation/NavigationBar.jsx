import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function NavigationBar() {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/biodatas"}>Biodatas</Link>
      </li>
      <li>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link to={"/"}>About Us</Link>
      </li>
      <li>
        <Link to={"/"}>Contact Us</Link>
      </li>
    </>
  );
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Navbar.Toggle />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PairUp
        </span>
      </Navbar.Brand>
      {/*  */}
      {user?.photoURL ? (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                // img={user?.photoURL}
                img={user?.photoURL}
                referrerPolicy="no-referrer"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            {/* <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item> */}
            <Dropdown.Divider />
            <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      ) : (
        <div className="flex md:order-2 gap-2">
          <Link to={"/signup"}>
            <Button>SignUp</Button>
          </Link>
          <Link to={"/login"}>
            <Button>login</Button>
          </Link>
        </div>
      )}

      <Navbar.Collapse>
        {links}
        {/* <Link><Navbar.Link href="#">Contact</Navbar.Link></Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

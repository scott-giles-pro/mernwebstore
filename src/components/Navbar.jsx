import './Navbar.css';
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div>
			<nav className="nav">
				<a href="/" className="home-link">Product Store 🛒</a>
				<ul>
					<li>
						<a href="/create" className="nav-link">
						<Button>
							<PlusSquareIcon fontSize={20} />
						</Button>
						</a>
					</li>
					<li>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;

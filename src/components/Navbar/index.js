import React from 'react';
import {Nav, NavLink, Bars, NavMenu,NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
			<NavLink to='/' activeStyle>
				Home
			</NavLink>

			<NavLink to='/createCustomer' activeStyle>
				Create Customer
			</NavLink>

			<NavLink to='/customerList' activeStyle>
				Customers List
			</NavLink>		

			<NavLink to='/createTask' activeStyle>
				 Create Task
			</NavLink>

			{/* <NavLink to='/taskList' activeStyle>
				 Tasks List
			</NavLink> */}
			
		</NavMenu>
		<NavBtn>
			<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

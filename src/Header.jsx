import { useState } from 'react';

import './Header.css';

const Header = () => {
	const [click, setClick] = useState(false);
	const menuToggle = () => setClick(!click);

	return (
		<header className='header'>
			<div className='container header__flex'>
				<div className='logo'>
					<h2>Logo here</h2>
				</div>
				<nav className='nav'>
					<ul className={click ? 'nav__list active' : 'nav__list'}>
						<li className='nav__list--item'>
							<a href='/' className='nav__list--link'>
								Home
							</a>
						</li>
						<li className='nav__list--item'>
							<a href='/' className='nav__list--link'>
								About
							</a>
						</li>
						<li className='nav__list--item'>
							<a href='/' className='nav__list--link'>
								Contact
							</a>
						</li>
						<li className='nav__list--item'>
							<a href='/' className='nav__list--link'>
								Login
							</a>
						</li>
					</ul>
				</nav>
				<div className='mobile__menu' onClick={menuToggle}>
					☰
				</div>
			</div>
		</header>
	);
};

export default Header;

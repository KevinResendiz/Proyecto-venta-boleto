import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	console.log(state);
	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<Link to='/catalogo2'>Catalogo</Link>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
						
					</div>
				) : (

					<nav>
						<Link to='/'>Inicio</Link>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrar</Link>
						<Link to='/catalogo'>Catalogo</Link>
						<Link to='/compra'>Compra</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};

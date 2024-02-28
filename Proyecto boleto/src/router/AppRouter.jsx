import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	Home,
	Dashboard,
	Login,
	Register,
	Buy,

} from '../Pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path='Login' element={<Login />} />
					<Route path='Register' element={<Register />} />
					<Route
						path='Dashboard'
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
					<Route path='ruta_1' element={<Ruta_1 />} />
					<Route path='ruta2' element={<Ruta2 />} />
					<Route path='ruta3' element={<Ruta3 />} />
					<Route path='Rutaprivada_1' element={<Rutaprivada_1 />} />
					<Route path='Rutaprivada2' element={<Rutaprivada2 />} />
					<Route path='Rutaprivada3' element={<Rutaprivada3 />} />

					<Route path='Rutaprivada_1' element={
						<PrivateRoute>
							<Rutaprivada_1 />
						</PrivateRoute>} 
						/>
					
					<Route path='Rutaprivada2' element={
						<PrivateRoute>
							<Rutaprivada2 />
						</PrivateRoute>} 
						/>
					<Route path='Rutaprivada3' element={
						<PrivateRoute>
							<Rutaprivada3 />
						</PrivateRoute>} 
						/>					
						



				</Route>
			</Routes>
		</>
	);
};

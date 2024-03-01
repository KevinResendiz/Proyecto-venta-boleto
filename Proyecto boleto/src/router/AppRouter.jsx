import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	CatalogoPage,
	CatalogoPage2,
	CompraPage,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					
					<Route index element={<HomePage />} />					
					<Route path='login' element={<LoginPage />} />					
					<Route path='register' element={<RegisterPage />} />
					<Route path='catalogo' element={<CatalogoPage/>} />
					<Route path='compra' element={<CompraPage/>} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					{/* <Route
						path='catalogo2'
						element={
							<PrivateRoute>
								<CatalogoPage2 />
							</PrivateRoute>
						}
					/> */}




				</Route>
			</Routes>
		</>
	);
};

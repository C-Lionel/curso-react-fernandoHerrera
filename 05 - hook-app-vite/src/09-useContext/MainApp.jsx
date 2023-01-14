import {Routes, Route, Navigate} from 'react-router-dom';
import { AboutPage, HomePage, LoginPage  } from './';
import { UserProvider } from './context/UserProvider';
import { Navbar } from './Navbar';

export const MainApp = () => {
    return (
        <UserProvider>

            <Navbar />

            <hr />

            {/* React Router 6 (ultima version) */}

            <Routes>

                <Route path='/' element={ <HomePage /> } />
                <Route path='login' element={ <LoginPage /> } />
                <Route path='about' element={ <AboutPage /> } />


                {/* <Route path='/*' element={ <LoginPage /> } /> */}
                <Route path='/*' element={ <Navigate to="/about" /> } />

            </Routes>

        </UserProvider>
    )
}

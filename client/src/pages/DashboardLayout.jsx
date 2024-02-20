
import { useState, createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import { checkDefaultTheme } from '../App';


const DashboardContext = createContext();

const DashboardLayout = () => {

    // temp
    const user = { name: 'jannick' };

    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const logoutUser = async () => {
        console.log('logout user');
    };


    return (
        <DashboardContext.Provider value={{ user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser, }} >
            <Wrapper>
                <main className='dashboard'>
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <Navbar />
                    <div className='dashboard-page'>
                    <Outlet />
                    </div>
                </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
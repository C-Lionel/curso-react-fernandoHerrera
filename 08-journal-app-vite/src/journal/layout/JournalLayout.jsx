import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar } from "../components";

export const JournalLayout = ({ children }) => {
    return (
        
        // Box es como un div
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

            {/* Navbar drawerWidth */}

            <NavBar />

            {/* Sidebar drawerWidth */}


            {/* <SideBar drawerWidth={drawerWidth} /><SideBar drawerWidth={drawerWidth} /> */}

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}

                <Toolbar />


                {children}

            </Box>

        </Box>
    )
}

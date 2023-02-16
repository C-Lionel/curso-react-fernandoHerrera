import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography, List, Drawer, Divider, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";




import { startLogout } from "../../store/auth";
import { SideBarItem } from "./SideBarItem";


export const NavBar = () => {

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(startLogout())
    }

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

    return (
        <AppBar position="fixed">
            <Toolbar>

                <IconButton
                    color="inherit"
                    edge="start"
                >


                    <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        <MenuOutlined />
                    </button>

                    <div className="offcanvas offcanvas-start w-100" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="staticBackdropLabel"></h5>
                            <button type="button" className="btn-close m-1" data-bs-dismiss="offcanvas" wi aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            <div>


                                <Box
                                    component='nav'
                                    sx={{ flexShrink: { sm: 0 } }}
                                >

                                    <Drawer
                                        data-bs-dismiss="offcanvas"
                                        variant="permanent"
                                        open={true}
                                        sx={{
                                            display: { xs: 'block' },
                                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80%' }
                                        }}
                                    >

                                        <Toolbar>
                                            <Typography variant="h6" noWrap component='div'>
                                                {displayName}
                                            </Typography>
                                        </Toolbar>

                                        <Typography variant="h6" noWrap component='div'>
                                            NOTAS
                                        </Typography>

                                        <Divider />

                                        <List >
                                            {
                                                notes.map(note => (
                                                    <SideBarItem key={note.id} {...note} />
                                                ))
                                            }
                                        </List>

                                    </Drawer>

                                </Box>

                            </div>
                        </div>
                    </div>
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant="h6" noWrap component='div'> JournalApp </Typography>
                    <IconButton
                        
                        color="error"
                        onClick={onLogout}
                    >
                        <LogoutOutlined style={{ fontSize: 40 }} />
                    </IconButton>
                </Grid>

            </Toolbar>

        </AppBar>
    )
}

import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core';

export default function Header(props) {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <Typography variant={props.variant} color='inherit' noWrap>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}


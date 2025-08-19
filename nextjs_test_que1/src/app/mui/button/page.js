"use client";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
        <div>
            <h1>Button Page</h1>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Contained button</Button>
            </Stack>
        </div>
    );
}

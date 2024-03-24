import React from 'react';
import { Stack } from '.';
import { Box } from '../box/index';

const meta = {
    title: 'Layout/Stack',
    component: Stack,
    parameters: {
        layout: 'centered'
    }
};

export default meta;

export const Default = () => (
    <Stack style={{ gap: '1rem', padding: '1rem', backgroundColor: '#ccc' }}>
        <Box style={{ width: '100px', height: '100px', backgroundColor: 'blue' }} />
        <Box style={{ width: '100px', height: '100px', backgroundColor: 'red' }} />
        <Box style={{ width: '100px', height: '100px', backgroundColor: 'green' }} />
    </Stack>
);

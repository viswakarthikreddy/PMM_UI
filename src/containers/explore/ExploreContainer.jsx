import React from 'react';
import { GoogleMap } from '../../components/GoogleMap';
import { Sidebar } from '../../components/sidebar';

const ExploreContainer = () => {
    return (
        <>
            <GoogleMap />
            <Sidebar />
        </>
    );
}

export default ExploreContainer;
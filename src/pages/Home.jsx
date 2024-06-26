import React, { useEffect, useState } from 'react';
import Header from '../components/movie/Header';
import Movies from './Movies';

const Home = () => {
    const [showInfo, setShowInfo] = useState(true);

    useEffect(()=> {
        const udh = setTimeout(()=> {
            setShowInfo(false);
        }, 5000);
        return () => clearTimeout(udh);
    }, [])
    return (
        <>
            {
                showInfo && (
                    <div>
                        <p></p>
                    </div>
                )
            }
            <Header />
            <Movies />
        </>
    );
};

export default Home;

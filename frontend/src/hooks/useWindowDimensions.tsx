import { useEffect, useState } from 'react';
import { Media } from 'react-data-table-component';

interface WindowDimensions {
    width: number;
    height: number;
    media: Media;
}

const getMedia = (width: number): Media => {
    if (width <= 599) {
        return Media.SM;
    }

    if (width <= 959) {
        return Media.MD;
    }

    return Media.LG;
};

const getWindowDimensions = (): WindowDimensions => {
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height,
        media: getMedia(width)
    };
};

export const useWindowDimensions = (): WindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = (): void => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

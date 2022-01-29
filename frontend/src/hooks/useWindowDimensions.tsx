import { useEffect, useState } from 'react';
import { Media } from 'react-data-table-component';
import { size } from '../components/utils/device';

interface WindowDimensions {
    width: number;
    height: number;
    media: Media;
}

const getMedia = (width: number): Media => {
    const { mobile, tablet } = size;

    if (width <= mobile) {
        return Media.SM;
    }

    if (width <= tablet) {
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

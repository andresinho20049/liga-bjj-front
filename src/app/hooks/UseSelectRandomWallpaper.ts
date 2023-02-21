import {useState, useEffect} from 'react';

interface IRandomWallpaperProps {
    rangeMin?: number;
    rangeMax?: number;

    prefix: string;
    imgFormat?: 'jpg' | 'png';
}

export const useSelectRandomWallpaper = (
    {
        rangeMin = 1,
        rangeMax = 3,

        prefix,
        imgFormat = 'jpg'
    }: IRandomWallpaperProps
) => {

    //Select Random Wallpaper
    const [randomWallpaper, setRandomWallpaper] = useState<string>('');

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * rangeMax) + rangeMin

        setRandomWallpaper(`url(${prefix}-${randomNumber}.${imgFormat})`);
    }, []);

    return {
        randomWallpaper
    }
}
import { useState, useEffect } from "react";

export const UseSizePage = () => {
    const [size, setSize] = useState([0, 0]);

    useEffect(() => {
        const getWidthHeight = () => {
            let newSize = JSON.parse(JSON.stringify(size));
            newSize[0] = window.innerWidth;
            newSize[1] = window.innerHeight;
            setSize(newSize);
        }
        getWidthHeight();
        window.addEventListener('resize', getWidthHeight);
        return () => {
            window.removeEventListener('resize', getWidthHeight);
        }
    },[window.innerWidth, window.innerHeight]);

    return size;
}
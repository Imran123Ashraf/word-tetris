import viewportSize from "viewport-size";

export const noOfColumn = 12;
export const numberOfRow = 18;
export const moveTime = 700;
export const checkWordTime = 2000;


export const windowHeight = () => viewportSize.getHeight();
export const windowWidth = () => viewportSize.getWidth();

export const blockSize = () => {
    const calculatedSize = (viewportSize.getWidth() - 10) / noOfColumn;
    return calculatedSize < 30 ? calculatedSize : 30;
}


export const COLORS = {
    MOVING: "green",
    NOTMOVING: "#262723",
    POSSIBLE_WORD: "#32bc4c"
}

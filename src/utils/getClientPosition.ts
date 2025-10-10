export const getClientPosition = (e: Event) => {
    let x = 0;
    let y = 0;
    if (e instanceof MouseEvent) {
        x = e.clientX;
        y = e.clientY;
    } else if (e instanceof TouchEvent) {
        x = e.touches[0]?.clientX || 0;
        y = e.touches[0]?.clientY || 0;
    }
    return { x, y };
};

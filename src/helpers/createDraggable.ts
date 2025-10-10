import { onMounted, ref, useTemplateRef } from "vue";
import { getClientPosition } from "../utils/getClientPosition";
import { requestAnimatinoFrameAfter } from "../utils/requestAnimationFrameAfter";

type Movement = {
    startX: number;
    startY: number;
    moveX: number;
    moveY: number;
};

type DraggableOptions = {
    onDragStart?: () => void;
    onDrag?: (element: HTMLElement, movement: Movement) => void;
    onDragEnd?: (element: HTMLElement, movement: Movement) => void;
    sortable?: boolean;
};

export const createDraggable = (refName: string, options: DraggableOptions) => {
    let startX = 0;
    let startY = 0;
    let moveX = 0;
    let moveY = 0;

    let cancelReset: () => void | undefined;

    const moving = ref(false);
    const elementRef = useTemplateRef(refName);

    onMounted(() => {
        const element = elementRef.value as HTMLElement;

        const handleDragStart = (e: Event) => {
            e.preventDefault();
            moving.value = true;

            cancelReset?.();
            element.style.transition = "";
            element.style.zIndex = "999";

            const clienPosition = getClientPosition(e);
            startX = clienPosition.x;
            startY = clienPosition.y;

            element.addEventListener("mousemove", handleDrag);
            element.addEventListener("mouseup", handleDragEnd);
            element.addEventListener("mouseleave", handleDragEnd);
            element.addEventListener("touchmove", handleDrag);
            element.addEventListener("touchend", handleDragEnd);
            element.addEventListener("touchcancel", handleDragEnd);
        };

        const handleDrag = (e: Event) => {
            const clientPosition = getClientPosition(e);

            moveX = clientPosition.x - startX;
            moveY = clientPosition.y - startY;

            element.style.transform = `translate3d(${moveX}px,${moveY}px,0)`;
        };

        const handleDragEnd = () => {
            element.style.transition = "200ms ease";
            element.style.transform = "translate3d(0,0,0)";

            cancelReset = requestAnimatinoFrameAfter(200, () => {
                element.removeAttribute("style");
                moving.value = false;
            });

            element.removeEventListener("mousemove", handleDrag);
            element.removeEventListener("mouseup", handleDragEnd);
            element.removeEventListener("mouseleave", handleDragEnd);
            element.removeEventListener("touchmove", handleDrag);
            element.removeEventListener("touchend", handleDragEnd);
            element.removeEventListener("touchcancel", handleDragEnd);
        };

        element.addEventListener("mousedown", handleDragStart);
        element.addEventListener("touchstart", handleDragStart);
    });

    return { moving };
};

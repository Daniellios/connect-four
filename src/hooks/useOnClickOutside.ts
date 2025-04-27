import { RefObject } from "react";
import { useEventListener } from "./useEventListener";

type Handler = (event: MouseEvent) => void;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: Handler,
    mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {
    useEventListener(mouseEvent, (event) => {
        const el = ref?.current;
        const target = event.target as Node;

        console.log(el);

        // Do nothing if clicking ref's element or descendent elements
        if (
            !el ||
            el.contains(target) ||
            target.nodeName === "svg" ||
            target.nodeName === "path"
        ) {
            return;
        }

        handler(event);
    });
}

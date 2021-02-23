export function focusElement({ childSelector }) {
    return function focus(element) {
        if (!element) return;
        const child = element.querySelector(childSelector);

        if (child) {
            child.focus();
        }
    };
}

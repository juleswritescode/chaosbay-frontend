export function onKey(key, cb, ...args) {
    return function execute(e) {
        if (e.key == key) {
            cb(...args);
        }
    };
}

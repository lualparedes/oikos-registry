export const g = (selector) => document.querySelector(selector);

export function clone(object) {
    if ( Object.entries(object).length > 100 ) {
        console.warn(
            "This method might not be optimal for the size of the object"
        );
    }
    return JSON.parse(JSON.stringify(object));
}
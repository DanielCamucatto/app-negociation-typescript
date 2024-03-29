export function domInjector(selector) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
            }
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}

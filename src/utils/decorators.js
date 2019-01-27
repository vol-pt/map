export function bind(target, key, descriptor) {
    return {
        enumerable: descriptor.enumerable,
        get() {
            if (this === target) {
                return descriptor.value;
            }
            return descriptor.value.bind(this);
        },
    };
}

export function mapFromInitialStateKeys(initialState, exclude = ['isLoading', 'type']) {
    return function(obj) {
        return Object.getOwnPropertyNames(initialState).reduce((acc, key) => {
            if (exclude.includes(key)) {
                return acc;
            } else {
                acc[key] = obj[key] ? obj[key] : null;
                return acc;
            }
        }, {});
    };
}

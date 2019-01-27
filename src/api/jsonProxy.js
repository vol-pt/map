import { Api } from './api';

export default {
    get: function(target, prop) {
        const targetMethod = target[prop];
        if (!(targetMethod instanceof Function)) {
            return Reflect.get(...arguments);
        }
        return function(...args) {
            const results = targetMethod.apply(this, args);
            if (results instanceof Promise && Object.getOwnPropertyNames(Api.prototype).includes(prop)) {
                return results.then(response => {
                    const status = response.status;
                    const responseBody = status !== 204 ? response.json() : {};
                    if (status >= 200 && status < 300) {
                        return responseBody;
                    } else {
                        return responseBody.then(body => {
                            const bind = Promise.reject.bind(Promise);
                            return bind({
                                body,
                                status,
                            });
                        });
                    }
                });
            }
            return results;
        };
    },
};

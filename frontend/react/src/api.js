import { request } from './utils';


export const wishApi = {
    baseuri: 'wishes',

    index(config) {
        return request.get(this.baseuri, config);
    },
    store(obj, config) {
        return request.post(this.baseuri, obj, config);
    },
    show(id, config) {
        return request.get(`${this.baseuri}/${id}`, config);
    },
    update(id, obj, config) {
        return request.patch(`${this.baseuri}/${id}`, obj, config);
    },
    destroy(id, config) {
        return request.delete(`${this.baseuri}/${id}`, config);
    }
};

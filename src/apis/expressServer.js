const serverUrl = 'https://443b-103-107-85-104.ngrok-free.app';

export function car() {
    const path = 'api/cars'
    return {
        getAll: () => hitServer(path, 'GET'),
        getById: id => hitServer(`${path}/${id}`, 'GET'),
        store: data => hitServer(path, 'POST', data),
        update: (id, data) => hitServer(`${path}/${id}`, 'PUT', data),
        delete: id => hitServer(`${path}/${id}`, 'DELETE')
    }
}

export function partner() {
    const path = 'api/partners'
    return {
        getAll: () => hitServer(path, 'GET'),
        getById: id => hitServer(`${path}/${id}`, 'GET'),
        store: data => hitServer(path, 'POST', data),
        update: (id, data) => hitServer(`${path}/${id}`, 'PUT', data),
        delete: id => hitServer(`${path}/${id}`, 'DELETE')
    }
}

export function employee() {
    const path = 'api/employees'
    return {
        getAll: status => hitServer(path, 'GET', { status }),
        getById: id => hitServer(`${path}/${id}`, 'GET'),
        store: data => hitServer(path, 'POST', data),
        update: (id, data) => hitServer(`${path}/${id}`, 'PUT', data),
        delete: id => hitServer(`${path}/${id}`, 'DELETE')
    }
}

export function activity() {
    const path = 'api/activity'
    return {
        getAll: date => hitServer(path, 'GET', { date }),
        getById: id => hitServer(`${path}/${id}`, 'GET'),
        store: data => hitServer(path, 'POST', data),
        update: (id, data) => hitServer(`${path}/${id}`, 'PUT', data),
        delete: id => hitServer(`${path}/${id}`, 'DELETE')
    }
}

export function salary() {
    const path = 'api/salaries'
    return {
        getAll: month => hitServer(path, 'GET', { month }),
        getById: id => hitServer(`${path}/${id}`, 'GET'),
        getByMonthNEmployee: (month, employeeId) => hitServer(path, 'GET', { month, user_id: employeeId }),
        store: data => hitServer(path, 'POST', data),
        update: (id, data) => hitServer(`${path}/${id}`, 'PUT', data)
    }
}

export function wage() {
    const path = 'api/wages'
    return {
        getAll: () => hitServer(path, 'GET'),
        getById: id => hitServer(`${path}/${id}`, 'GET'),
        store: data => hitServer(path, 'POST', data),
        update: (id, data) => hitServer(`${path}/${id}`, 'PUT', data),
        delete: id => hitServer(`${path}/${id}`, 'DELETE')
    }
}

// TODO: api trip not yet implemented n need to be change
export function trip() {
    const path = 'api/trips'
    return {
        getAll: () => hitServer(path, 'GET'),
        getById: id => hitServer(`${path}/${id}`, 'GET'),
        store: data => hitServer(path, 'POST', data),
        update: (id, data) => hitServer(`${path}/${id}`, 'PUT', data),
        delete: id => hitServer(`${path}/${id}`, 'DELETE')
    }
}

const hitServer = async (path, method, data ) => {
    try {
        if (method === 'GET') {
            const query = convertJsonToQueryString(data);
            const response = await fetch(`${serverUrl}/${path}?${query}`, {
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
                signal: AbortSignal.timeout(5000)
            });
            return response.json();
        }

        if (data) {
            const response = await fetch(`${serverUrl}/${path}`, {
                method: method,
                headers: { 'Content-type': 'application/json' },
                signal: AbortSignal.timeout(5000),
                body: JSON.stringify( snakeCasedData(data) )
            });
            return response.json();
        }

        const response = await fetch(`${serverUrl}/${path}`, {
            method: method,
            headers: { 'Content-type': 'application/json' },
            signal: AbortSignal.timeout(5000)
        });
        return response.json();
    } catch (e) {
        return {error: true, message: e.message};
    }
}

const convertJsonToQueryString = json => {
    if (!json) return '';
    const queryString = [];
    for (const key in json) {
        const snakeCaseKey = toSnakeCase(key);
        if (typeof json[key] === 'object') {
            queryString.push(convertJsonToQueryString(json[key], key));
        } else {
            queryString.push(`${encodeURIComponent(snakeCaseKey)}=${encodeURIComponent(json[key])}`);
        }
    }
    return queryString.join('&');
}

const snakeCasedData = data => {
    return Object.fromEntries(
        Object.keys(data).map(key => [ toSnakeCase(key), data[key] ])
    );
}


const toSnakeCase = key => key.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);

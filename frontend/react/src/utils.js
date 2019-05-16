import axios from 'axios'

// create an axios instance
const request = axios.create({
    baseURL: 'http://localhost:8000/api/v1/', // api 的 base_url
    'X-Requested-With': 'XMLHttpRequest',
    timeout: 30000 // request timeout 30s
})


// response interceptor
request.interceptors.response.use(
    response => response,
    error => {
        let $message

        if (error.response) {
            const data = error.response.data
            $message = data.message || (data.data && data.data.message) || error.message
        } else {
            $message = error.message
        }

        window.alert($message)

        return Promise.reject(error)
    }
)


function formatTime(dateObj) {
    if (dateObj && dateObj.date) {
        const date = dateObj.date.substring(0, 19).replace(/-/g, '/')
        // return new Date(date).toLocaleString()
        const dt = new Date(date)
        const month = dt.getMonth() + 1 // 从 Date 对象返回月份 (0 ~ 11)

        return dt.getFullYear() + '/' +
            month + '/' +
            dt.getDate() + ' ' +
            dt.getHours() + ':' +
            dt.getMinutes()
    }

    return ''
}


export { formatTime, request }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export class Api {
    constructor(config) {
        this.baseUrl = config.baseUrl;
    }


    getAllItems = () => {
        return fetch(`${this.baseUrl}products`, { 
            headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4NzFhMmUwYmYyYzUxOWI5Y2NmYmUiLCJncm91cCI6IjEyIiwiaWF0IjoxNjgzNTE3ODcwLCJleHAiOjE3MTUwNTM4NzB9.US7rv52pRMThoo6sbhQeetW87zCYwxUuqZ6yZO2iS3w`,
            }})
            .then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            });     
    };
    getProductById = (id) => {
        return fetch(`${this.baseUrl}products/${id}`, { 
            headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4NzFhMmUwYmYyYzUxOWI5Y2NmYmUiLCJncm91cCI6IjEyIiwiaWF0IjoxNjgzNTE3ODcwLCJleHAiOjE3MTUwNTM4NzB9.US7rv52pRMThoo6sbhQeetW87zCYwxUuqZ6yZO2iS3w`,
            }})
            .then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
    };

    getUserInfo = () => {
        return fetch(`${this.baseUrl}users/me`, {
            headers:  {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                },
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
    }

    toggleLike = (id, isLiked) => {
        return fetch(`${this.baseUrl}products/likes/${id}`, {
            method:  isLiked ? "DELETE" : 'PUT',
            headers:  {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                },
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
    }

    authorizationUser = (data) => {
        return fetch(`${this.baseUrl}signin`,  {
            method:  "POST",
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
    }

    registrationUser = (data) => {
        return fetch(`${this.baseUrl}signup`,  {
            method:  "POST",
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({          
                "group": "2222",
                "name": `user${getRandomInt(100000, 999999)}`,
                "password": data.password,
                "email": data.email,
            }),
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
    }


    resetPassword = (data) => {
        return fetch(`${this.baseUrl}password-reset`, {
            method:  "POST",
            headers:  {
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4NzFhMmUwYmYyYzUxOWI5Y2NmYmUiLCJncm91cCI6IjEyIiwiaWF0IjoxNjgzNTE3ODcwLCJleHAiOjE3MTUwNTM4NzB9.US7rv52pRMThoo6sbhQeetW87zCYwxUuqZ6yZO2iS3w`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
        }

        setUserInfo = (data) => {
        return fetch('https://api.react-learning.ru/v2/2222/users/me', {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
        }
}   
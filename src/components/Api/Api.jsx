
export class Api {
    constructor(config) {
        this.baseUrl = config.baseUrl;
    }


    getAllItems = () => {
        return fetch(`${this.baseUrl}products`, { 
            headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4NzFhMmUwYmYyYzUxOWI5Y2NmYmUiLCJncm91cCI6IjEyIiwiaWF0IjoxNjgzNTE3ODcwLCJleHAiOjE3MTUwNTM4NzB9.US7rv52pRMThoo6sbhQeetW87zCYwxUuqZ6yZO2iS3w',
            }})
            .then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            });     
    };
    getProductById = (id) => {
        return fetch(`${this.baseUrl}products/${id}`, { 
            headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4NzFhMmUwYmYyYzUxOWI5Y2NmYmUiLCJncm91cCI6IjEyIiwiaWF0IjoxNjgzNTE3ODcwLCJleHAiOjE3MTUwNTM4NzB9.US7rv52pRMThoo6sbhQeetW87zCYwxUuqZ6yZO2iS3w',
            }})
            .then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
    };

    // addLike = (id) => {
    //     return fetch(`${this.baseUrl}products/likes/${id}`, { 
    //         method: 'PUT',
    //         headers: {
    //         authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4NzFhMmUwYmYyYzUxOWI5Y2NmYmUiLCJncm91cCI6IjEyIiwiaWF0IjoxNjgzNTE3ODcwLCJleHAiOjE3MTUwNTM4NzB9.US7rv52pRMThoo6sbhQeetW87zCYwxUuqZ6yZO2iS3w',
    //         },
    //     })
    //         .then(res => {
    //         console.log(res)
    //         return res.ok ? res.json() : Promise.reject('У меня лапки')
    //         }); 
    // };

    // deleteLike = (id) => {
    //     return fetch(`${this.baseUrl}products/likes/${id}`, { 
    //         method: 'DELETE',
    //         headers: {
    //         authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4NzFhMmUwYmYyYzUxOWI5Y2NmYmUiLCJncm91cCI6IjEyIiwiaWF0IjoxNjgzNTE3ODcwLCJleHAiOjE3MTUwNTM4NzB9.US7rv52pRMThoo6sbhQeetW87zCYwxUuqZ6yZO2iS3w',
    //         },
    //     })
    //         .then(res => {
    //         console.log(res)
    //         return res.ok ? res.json() : Promise.reject('У меня лапки')
    //         }); 
    // };

    getUserInfo = () => {
        return fetch(`${this.baseUrl}users/me`, {
            headers:  {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4NzFhMmUwYmYyYzUxOWI5Y2NmYmUiLCJncm91cCI6IjEyIiwiaWF0IjoxNjgzNTE3ODcwLCJleHAiOjE3MTUwNTM4NzB9.US7rv52pRMThoo6sbhQeetW87zCYwxUuqZ6yZO2iS3w',
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
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU4NzFhMmUwYmYyYzUxOWI5Y2NmYmUiLCJncm91cCI6IjEyIiwiaWF0IjoxNjgzNTE3ODcwLCJleHAiOjE3MTUwNTM4NzB9.US7rv52pRMThoo6sbhQeetW87zCYwxUuqZ6yZO2iS3w',
                },
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
    }
}   
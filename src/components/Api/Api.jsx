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
            authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }})
            .then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            });     
    };
    getProductById = (id) => {
        return fetch(`${this.baseUrl}products/${id}`, { 
            headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
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
            return res.ok ? res.json() : Promise.reject("Требуется авторизация")
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
        return fetch(`${this.baseUrl}forgot-password`, {
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
    
    setPassword = (data) => {
        return fetch(`${this.baseUrl}password-reset/${data.token}`, {
            method:  "PATCH",
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "password": data.password,
            })
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
        }

    setUserInfo = (data) => {
        return fetch(`${this.baseUrl}v2/2222/users/me`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                about: 'Frontend',
                name: data.name,
            }),
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 
        }

    addReview = (data) => {
        return fetch(`${this.baseUrl}products/review/${data.id}`, {
                method: "POST",
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: data.text,
                    rating: data.rating,
                }),
            }).then(res => {
                console.log(res)
                return res.ok ? res.json() : Promise.reject('У меня лапки')
                }); 
            }
            
    deleteReview = (idRew, idProd) => {
        return fetch(`${this.baseUrl}products/review/${idProd}/${idRew}`, {

            method: "DELETE",
            headers:  {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                },
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 

    }

    searchProduct(path) {
        return fetch(`${this.baseUrl}/products/search?query=${path}`, {
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }})
                .then(res => {
                console.log(res)
                return res.ok ? res.json() : Promise.reject('У меня лапки')
                });     
        };

    getAllReviewsById = (id) => {
        return fetch(`${this.baseUrl}products/review/${id}`, {
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                    'Content-Type': 'application/json'
                },
            }).then(res => {
                console.log(res)
                return res.ok ? res.json() : Promise.reject('У меня лапки')
                }); 
            }
            
    setUserAvatar = (data) => {
        return fetch(`${this.baseUrl}users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            }),
        }).then(res => {
            console.log(res)
            return res.ok ? res.json() : Promise.reject('У меня лапки')
            }); 

    }
}   

const express = require('express')
// upar wale syntax ko aise bhi likh sakte hai 
// import express from 'express'
// importing dot env 
require('dotenv').config()
const app = express()
const port = 4000
const githubData = {
    "login": "Sahilsingh0507",
    "id": 83732513,
    "node_id": "MDQ6VXNlcjgzNzMyNTEz",
    "avatar_url": "https://avatars.githubusercontent.com/u/83732513?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sahilsingh0507",
    "html_url": "https://github.com/Sahilsingh0507",
    "followers_url": "https://api.github.com/users/Sahilsingh0507/followers",
    "following_url": "https://api.github.com/users/Sahilsingh0507/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sahilsingh0507/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sahilsingh0507/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sahilsingh0507/subscriptions",
    "organizations_url": "https://api.github.com/users/Sahilsingh0507/orgs",
    "repos_url": "https://api.github.com/users/Sahilsingh0507/repos",
    "events_url": "https://api.github.com/users/Sahilsingh0507/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sahilsingh0507/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sahil Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2021-05-05T21:37:32Z",
    "updated_at": "2024-10-07T15:18:14Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('sahilsinghdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login</h1>')
})


app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

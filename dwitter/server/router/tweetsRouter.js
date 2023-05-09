import express from 'express';
import 'express-async-errors';

const router = express.Router();


let tweets = [
    {
        id: '1',
        text: '노드 공부하기',
        createdAt: Date.now().toString(),
        name: 'Sara',
        userName: 'sara'
    },
    {
        id: '2',
        text: '코테 공부하기',
        createdAt: Date.now().toString(),
        name: 'Will',
        userName: 'will'
    },
    {
        id: '3',
        text: '일하기',
        createdAt: Date.now().toString(),
        name: 'Loopy',
        userName: 'loopy'
    },
    
]

// Get /tweets
// Get / tweets?userName=userName
router.get('/', (req, res, next) => {
    const userName = req.params.userName;
    tweets = userName ? tweets.filter((tweet) => { tweet.userName === userName}) : tweets;
    res.status(200).json(tweets);
    
})

// Post /tweets
// Put /tweets/:tweet_id
// Delete /tweets/:tweet_id

export default router;
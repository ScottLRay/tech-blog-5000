const { Comment } = require('../models');

const commentData = [{
        comment_text: "This looks really cool!!!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "I have learn that trail biking is really hard",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "What happen to the DOS system?",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "UNCC Bootcamp",
    "postContent": "Bootcamp for Full Stack Development",
    "userId": 1
  },
  {
    "postTitle": "Charlotte",
    "postContent": "Charlotte is Fast Growing Financial Hub",
    "userId": 2
  },
  {
    "postTitle": "Year 2021 and 2022",
    "postContent": "Hope this COVID will End Soon",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
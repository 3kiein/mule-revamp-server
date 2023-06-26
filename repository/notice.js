const { v4: uuidv4 } = require('uuid')


module.exports.notices = [{
    id:1,
    createdAt:123123,
    title:123123123,
    author:123123123,
    content:123123123,
    reply: {
        id: uuidv4(),
        createdAt:12312312,

    }
}]
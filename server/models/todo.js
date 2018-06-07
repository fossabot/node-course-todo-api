var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
    },
    completedAt: {
        type: Number,
        required: false,
        default: null
    },
    assigned: {
        type: String,
        trim: true
    }
});


module.exports = {
    Todo: Todo
};

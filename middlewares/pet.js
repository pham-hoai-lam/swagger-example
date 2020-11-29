var pets = [{id: 1, name: "dog"}, {id: 2, name: "cat"}];

module.exports = {
    list(req, res, next) {
        return res.json(pets);
    },

    add(req, res, next) {

    },

    getOne(req, res, next) {

    },

    update(req, res, next) {

    },

    remove(req, res, next) {

    },
};

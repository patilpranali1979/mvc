const empModel = require('../models/empModel');

const displayemp = async (req, resp) => {
    try {
        const result = await empModel.find();

        resp.render("employee", { data: result });

    } catch (err) {
        console.log(err);
        resp.status(500).send("Error fetching employees");
    }
};

module.exports = { displayemp };
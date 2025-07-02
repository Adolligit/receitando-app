
function all (req, res) {
    return res.status(200).json({ hello: "world" });
}


module.exports = { all };
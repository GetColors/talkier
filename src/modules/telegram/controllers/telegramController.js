const status = async (request, response) => {
    response.status(200).json({message:"telegram module is working fine."});
};

module.exports = {
    status
};
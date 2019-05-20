const status = async (request, response) => {
    response.status(200).json({message:"slack module is working fine."});
};

module.exports = {
    status
};
const geoip = require('geoip-lite');

function FormResponse(request, response) {

    let formattedResponse = {
        fullName: response.data.full_name,
        description: response.data.description,
        cloneUrl: response.data.clone_url,
        starz: response.data.stargazers_count,
        createdAt: FormDate(request, response)
    };

    return formattedResponse;

};

function FormDate(request, response) {

    let dateSubstring = response.data.created_at.substr(0, 10);
    let dateBlocks = dateSubstring.split('-');

    console.log(dateBlocks);

    if(request.location === 'US') {
        return dateBlocks[1] + '-' + dateBlocks[2] + '-' + dateBlocks[0];
    } else {
        return dateBlocks[2] + '-' + dateBlocks[1] + '-' + dateBlocks[0];
    }
};

module.exports = {
    FormResponse,
    FormDate
};
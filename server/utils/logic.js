const geoip = require('geoip-lite');

function FormResponse(request, response) {

    let formattedResponse = {
        fullName: response.data.full_name,
        description: response.data.description,
        cloneUrl: response.data.clone_url,
        starz: response.data.stargazers_count,
        createdAt: response.data.created_at.substr(0, 10)
    };

    if (request.location !== 'US') {
        return formattedResponse;
    } else {
        formattedResponse.createdAt = 'dupa';
        return formattedResponse;
    }
};

// function FormatDate(response) {

// };

function FormUsDate(request, response) {

    let dateSubstring = response.data.created_at.substr(0, 10);
    let dateBlocks = dateSubstring.split('-');

    console.log(dateBlocks);
    return dateSubstring

    // if(location === 'US') {

    // }
};

module.exports = {
    FormResponse,
    FormUsDate
};
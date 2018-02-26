function formResponse(response) {
    // let repoName = response.data.full_name;
    // let repoDescr = response.data.description;
    // let repoCloneURL = response.data.clone_url;
    // let repoStarz = response.data.stargazers_count;
    // let repoCreationDate = response.data.created_at;

    let formattedResponse = {
        fullName: response.data.full_name,
        description: response.data.description,
        cloneUrl: response.data.clone_url,
        starz: response.data.stargazers_count,
        createdAt: response.data.created_at
    };
    return formattedResponse;
};

module.exports = {formResponse};
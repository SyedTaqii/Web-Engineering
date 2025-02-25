const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", submitFunction);

let clientId = "Ov23likHXWMkq4THFxK2";
let clientSecret = "b9743297e1f36ab575840f078aa4a063466c02b3";

async function submitFunction(event) {
    event.preventDefault();
    let username = document.getElementById("searchBar").value;
    let URL = `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`;
    try {
        const gitAPI = await fetch(URL);

        if (!gitAPI.ok) {
            throw new Error("404 User not found");
        }

        const profile = await gitAPI.json();
        console.log(profile);
        displayProfile(profile);

    } catch (error) {
        console.error("Error fetching GitHub API:", error);
        alert(error.message);
    }
}

function displayProfile(profile) {
    let repoURL = profile.repos_url;
    let profileDiv = document.getElementById("gitProfile");
    profileDiv.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.textContent = "Profile"; 
    profileDiv.appendChild(h2);
    let img = document.createElement("img");
    img.src = profile.avatar_url;
    img.alt = "Profile Picture";

    // let name = document.createElement("h2");
    // name.textContent = profile.name || "No Name Provided";

    let login = document.createElement("h3");
    login.textContent = profile.login;

    let email = document.createElement("p");
    email.textContent = profile.email || "No Email Provided";

    let location = document.createElement("p");
    location.textContent = profile.location || "No Location Provided";

    let profileLink = document.createElement("a");
    profileLink.href = profile.html_url;
    profileLink.textContent = "View Profile";
    profileLink.target = "_blank";

    let ul = document.createElement("ul");

    let followersLi = document.createElement("li");
    followersLi.textContent = `Followers: ${profile.followers}`;

    let followingLi = document.createElement("li");
    followingLi.textContent = `Following: ${profile.following}`;

    let reposLi = document.createElement("li");
    reposLi.textContent = `Public Repos: ${profile.public_repos}`;

    ul.appendChild(followersLi);
    ul.appendChild(followingLi);
    ul.appendChild(reposLi);

    profileDiv.appendChild(img);
    // profileDiv.appendChild(name);
    profileDiv.appendChild(login);
    profileDiv.appendChild(email);
    profileDiv.appendChild(location);
    profileDiv.appendChild(profileLink);
    profileDiv.appendChild(ul);

    displayRepos(repoURL);
}

async function displayRepos(repoURL) {
    const reposResponse = await fetch(repoURL);
    const repos = await reposResponse.json();
    let reposDiv = document.getElementById("repos");
    reposDiv.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.textContent = "Repositories";
    reposDiv.appendChild(h2);

    repos.forEach(repo => {
        let repoDiv = document.createElement("div");
        repoDiv.classList.add("repo");

        let repoName = document.createElement("h3");
        repoName.textContent = repo.name;

        let repoDescription = document.createElement("p");
        repoDescription.textContent = repo.description || "No description available";

        let repoLink = document.createElement("a");
        repoLink.href = repo.html_url;
        repoLink.textContent = "View Repository";
        repoLink.target = "_blank";

        repoDiv.appendChild(repoName);
        repoDiv.appendChild(repoDescription);
        repoDiv.appendChild(repoLink);

        reposDiv.appendChild(repoDiv);
    });
}
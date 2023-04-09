// JavaScript
const apiUrl = "https://api.github.com/users/pablolop12";
const accessToken = "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";

fetch(apiUrl, {
  headers: {
    Authorization: `token ${accessToken}`
  }
})
  .then((response) => response.json())
  .then((data) => {
    const profileImg = document.querySelector(".gitprev-img");
    profileImg.src = data.avatar_url;

    const name = document.querySelector(".gitprev-name");
    name.textContent = data.name;
    
    const username = document.querySelector(".gitprev-username");
    username.textContent =data.login;

    const description = document.querySelector(".gitprev-description");
    description.textContent = data.bio;

    const location = document.querySelector(".gitprev-location");
    location.textContent = `${data.location}`;

    const publicRepos = document.querySelector(".gitprev-repos");
    publicRepos.textContent = `Repositorios públicos: ${data.public_repos}`;
  })
  .catch((error) => {
    console.log(error);
  });

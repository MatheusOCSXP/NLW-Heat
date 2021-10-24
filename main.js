const linksSocialMedia = {
  linkedin: 'matheusocs',
  github: 'matheusocsxp'
}

/*function changeUserName() {
  userName.textContent = "Matheus Santos"
}

changeUserName()*/

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/in/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userNameUrl.href = data.html_url
      userAvatar.src = data.avatar_url
      userName.textContent = data.name
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

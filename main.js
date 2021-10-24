// variaveis let ou const

const LinksSocialMedia = {
  github: 'andrehigashi',
  youtube: 'andrehigashi',
  facebook: 'andrehigashi',
  instagram: 'andre.higashi',
  twitter: 'andrehigashi'
}
function ChangeSocialMedia() {
  //  document.getElementById('UserName').
  //  textContent = 'dezin'
  //  UserName.textContent = ("marcelin")
  for (let li of SocialLink.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
ChangeSocialMedia()
function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}
getGitHubProfileInfo()

//ARROW FUNCTIONS
// function nomedafuncao(argumento) {}
// argumento => {}

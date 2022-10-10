import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/marktucker08')
  .then( res => {
      let card = cardMaker(res.data);
      cards.appendChild(card);
    })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["clintfix", "dustinmyers", "justsml", "luishrd", "bigknell"];
const URL = 'https://api.github.com/users/'

for (let i = 0; i < followersArray.length; i++) {
  axios.get(URL + followersArray[i])
    .then( res => {
      console.log(res);
      let card = cardMaker(res.data);
      cards.appendChild(card);
    })
};

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  const userImg = document.createElement('img');
  userImg.src = obj.avatar_url; 
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const name = document.createElement('h3');
  name.textContent = obj.name;
  name.classList.add('name');
  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = obj.login;
  const location = document.createElement('p');
  location.textContent = `Location: ${obj.location}`;
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  profileLink.href = obj.html_url;
  profileLink.textContent = obj.html_url;
  profile.textContent = 'Profile:';
  const followersCount = document.createElement('p');
  followersCount.textContent = `Followers: ${obj.followers}`;
  const followingCount = document.createElement('p');
  followingCount.textContent = `Following: ${obj.following}`;
  const bio = document.createElement('p');
  bio.textContent = `Bio: ${obj.bio}`;
  newCard.appendChild(userImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followersCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(bio);
  return newCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

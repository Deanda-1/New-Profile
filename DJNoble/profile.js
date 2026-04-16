const container = document.getElementById("profile");

container.innerHTML = `
  <h1>${profile.name}</h1>
  <p>${profile.bio}</p>
  <p>Email: ${profile.email}</p>
`;
const training = ["Musician", "Media Design", "Software Engineering"];

let listItems = "";

training.forEach((training) => {
  listItems += `<li>${training}</li>`;
});

container.innerHTML += `
  <h3>Training</h3>
  <ul>${listItems}</ul>
`;
function resetProfile() {
  location.reload(); // reloads the page
}
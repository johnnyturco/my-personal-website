// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const articleTitle = document.querySelector('.articleTitle');
const linkField = document.querySelector('.linkField');
const linkButton = document.querySelector('.linkButton');
const contentContainer = document.querySelector('.contentContainer');

linkButton.addEventListener('click', function() {
  addLink(articleTitle.value,linkField.value);
});

function addLink(title,link) {
  const newLink = document.createElement('h2');
  newLink.innerHTML = `<a href="${link}">${title}</a>`
  newLink.className = 'article';
  contentContainer.appendChild(newLink);
}
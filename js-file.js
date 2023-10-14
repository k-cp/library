const myLibrary = []

class Book {
  constructor(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status
  }
  get getTitle() {
    return this.title
  }
  get getAuthor() {
    return this.author
  }
  get getPages() {
    return this.pages
  }
  get getStatus() {
    return this.status
  }
}

function addBookLibrary(book) {
  myLibrary.push(book)
}

function openPopup() {
  const popup = document.querySelector('.popup')
  popup.classList.add('open')
}
function hidePopup() {
  const popup = document.querySelector('.popup')
  popup.classList.remove('open')
}

function switchColor() {
  const check = this.classList.contains('read');
  if (check) {
    this.classList.remove('read');
    this.classList.add('notRead');
    this.textContent = 'Not read';
  }
  else {
    this.classList.remove('notRead');
    this.classList.add('read');
    this.textContent = 'read';
  }
}

function removeCard() {
  const parent = this.parentNode;
  parent.remove();
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from actually submitting

  const formData = new FormData(e.target);
  let container = document.querySelector('.container');

  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages") + ' pages';
  const status = formData.get("status");
  let book = new Book(title, author, pages, status);
  myLibrary.push(book);

  const card = document.createElement('div');
  for (let i = 0; i < 3; i ++) {
    const p = document.createElement('p');
    p.textContent = `${book.getTitle}`;
    card.appendChild(p);
  }
  const statusBtn = document.createElement('button');
  if (status === 'read') {
    statusBtn.textContent = 'read';
  }
  else {
    statusBtn.textContent = 'not read';
  }
  statusBtn.classList.add(status);
  statusBtn.addEventListener('click', switchColor);
  const remove = document.createElement('button');
  remove.textContent = 'Remove';
  remove.addEventListener('click', removeCard);
  card.appendChild(statusBtn);
  card.appendChild(remove);

  container.appendChild(card);
  hidePopup();
  e.target.reset();
  
});


for (let i in myLibrary) {
  console.log(myLibrary[i].getTitle)
  const bk = document.createElement('div');
  for (let i = 0; i < 3; i ++) {
    const p = document.createElement('p');
    p.textContent = `${book.getTitle}`;
    card.appendChild(p);
  }
  const statusBtn = document.createElement('button');
  if (status === 'read') {
    statusBtn.textContent = 'read';
  }
  else {
    statusBtn.textContent = 'not read';
  }
  statusBtn.classList.add(status);
  statusBtn.addEventListener('click', switchColor);
  const remove = document.createElement('button');
  remove.textContent = 'Remove';
  remove.addEventListener('click', removeCard);
  card.appendChild(statusBtn);
  card.appendChild(remove);
  bk.textContent = `${myLibrary[i].getTitle}`
  let container = document.querySelector('.container')
  container.appendChild(bk)
}

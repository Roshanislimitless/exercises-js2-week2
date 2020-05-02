/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
let content = document.querySelector("#content");




function exerciseOne(arrayOfPeople) {
  for (i = 0; i < arrayOfPeople.length; i++) {

    var newHone = document.createElement('h1');
    newHone.innerText = arrayOfPeople[i].name;

    var newHtwo = document.createElement('h2');
    newHtwo.innerText = arrayOfPeople[i].job;

    content.appendChild(newHone);
    content.appendChild(newHtwo);


  }

}





/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */


//Write your code in here
function exerciseTwo(shopping) {
  var ul = document.createElement('ul');


  for (i = 0; i < shopping.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = shopping[i];
    ul.appendChild(li);
    content.appendChild(ul);

  }

}


/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  let h1 = document.createElement('h1');
  h1.innerText = 'Book List';
  content.appendChild(h1);

  let ul = document.createElement('ul');
  ul.style.listStyleType = 'none';
  content.appendChild(ul);


  //images links creation in an array 
  var imageLink1 = "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
  var imageLink2 = "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
  var imageLink3 = "https://images-na.ssl-images-amazon.com/images/I/41uPjEenkFL._SX342_QL70_ML2_.jpg"
  var imageLinks = [imageLink1, imageLink2, imageLink3];

  for (i = 0; i < books.length; i++) {
    let pElement = document.createElement('p');
    pElement.innerText = books[i].title + " " + " -" + books[i].author;
    pElement.style.fontSize = '13px';
    pElement.style.marginTop = '0px';
    pElement.style.padding = '13px'


    var li = document.createElement('li');
    li.style.width = '300px';
    li.style.margin = '10px'
    li.style.float = 'left';



    let image = document.createElement('img');
    image.style.height = '250px';
    image.style.marginTop = '15px';
    image.style.height = '230px';
    image.src = imageLinks[i];
    pElement.append(image);



    li.appendChild(pElement);
    ul.appendChild(li);

    if (books[i].alreadyRead) {
      li.style.background = 'green';
    } else li.style.background = 'red';

  }

}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [{
    name: "Chris",
    job: "Teacher"
  },
  {
    name: "Joanna",
    job: "Student"
  },
  {
    name: "Boris",
    job: "Prime Minister"
  }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [{
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
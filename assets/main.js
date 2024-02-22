// paginierte API pattern

let pageCounter = 1;
const baseURL = "https://picsum.photos/id/";

const loadGallery = (limit) => {
  fetch(`https://picsum.photos/v2/list?page=${pageCounter}&limit=${limit}`)
    .then((response) => response.json())
    .then((data) => {
      pageCounter++;
      //console.log(data);

      data.forEach((cardIMG) => {
        // create a div, where I put all the content of the cards inside in the later code starting linen8

        const imgURL = `${baseURL}${cardIMG.id}/1920/1080`;
        let imgItem = document.createElement("div");

        /*
        //- alternative in I'm sane
        //create p tag, attach data from api, append inside div (cardItem)
        createImgItem(imgURL, imgItem);
        createAuthorTextItem(cardIMG.author, imgItem); //- takes author text from api, and the div container imgItem created above as container (see row42 for example)
        createButtonLink(cardIMG.url, imgItem);
        */

        // - alternative in I'm a senior grand wizard
        imgItem.appendChild(createImgItem2(imgURL));
        imgItem.appendChild(createAuthorTextItem2(cardIMG.author));
        imgItem.appendChild(createButtonLink2(cardIMG.url));

        //aooend the fully assembled div(imgItem) into the gallery in html
        document.querySelector(".grid-container").appendChild(imgItem);
      });
    });
};

/*
//- alternative in I'm sane
const createImgItem = (url, containerElement) => {
  let img = document.createElement("img");
  img.setAttribute("src", url);
  containerElement.appendChild(img);
};

const createAuthorTextItem = (author, containerElement) => {
  let imgAuthor = document.createElement("p"); // create <p> tag, assign it to variable imgAuthor
  imgAuthor.textContent = author; //  text provided by parameter author assigned to (<p>tag / variable imgAuthor)
  containerElement.appendChild(imgAuthor); // append previously created + filled (<p> tag / imgAuthor) to the provided container, in this case a parameter where to put it
};

const createButtonLink = (link, containerElement) => {
  let cardButtonLink = document.createElement("a");
  cardButtonLink.setAttribute("href", link);
  cardButtonLink.textContent = "See more";
  containerElement.appendChild(cardButtonLink);
};

*/

//! alternative in I'm a grand wizard dr med phil
const createImgItem2 = (url) => {
  let img = document.createElement("img");
  img.setAttribute("src", url);
  return img;
};

const createAuthorTextItem2 = (author) => {
  let imgAuthor = document.createElement("p"); // create <p> tag, assign it to variable imgAuthor
  imgAuthor.textContent = author; //  text provided by parameter author assigned to (<p>tag / variable imgAuthor)
  return imgAuthor;
};

const createButtonLink2 = (link) => {
  let cardButtonLink = document.createElement("a");
  cardButtonLink.setAttribute("href", link);
  cardButtonLink.textContent = "See more";
  return cardButtonLink;
};

// copy ende here

loadGallery(30);
/*
//- example of what happens in row 21-22
createAuthorTextItem("foobar", document.body);
createAuthorTextItem("foobar", document.body);
createAuthorTextItem("foobar", document.body);
createAuthorTextItem("foobar", document.body);
createAuthorTextItem("foobar", document.body);
createAuthorTextItem("foobar", document.body);
*/

fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((cardIMG) => {
      // create a div, where I put all the content of the cards inside in the later code starting linen8
      let imgItem = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("src", `${cardIMG.download_url}`);
      imgItem.appendChild(img);

      //create p tag, attach data from api, append inside div (cardItem)
      let imgAuthor = document.createElement("p");
      imgAuthor.textContent = cardIMG.author;
      imgItem.appendChild(imgAuthor);

      let cardButtonLink = document.createElement("a");
      cardButtonLink.setAttribute("href", `${cardIMG.url}`);
      cardButtonLink.textContent = "See more";
      imgItem.appendChild(cardButtonLink);

      //aooend the fully assembled div(imgItem) into the gallery in html
      document.querySelector(".grid-container").appendChild(imgItem);
    });
  });
//.catch((error) => console.error("Error while fetching", error));

// API-Key für Nutzung der News-Api
const apiKey = "81d32f41681f4fb19552923d019306f0";

// OUTPUT SECTION
const output = document.querySelector(".output");

// ====== FUNKTION ======
const getNews = () => {
  output.innerHTML = "";

  // SUCHLEISTE
  let keyword = document.querySelector("#search").value;
  let languages = document.querySelector("#languages").value;

  fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&language=${languages}&apiKey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log({ keyword }, { languages });
      const articles = data.articles;

      articles.forEach((singleArticle) => {
        const img = singleArticle.urlToImage;
        const author = singleArticle.author;
        const title = singleArticle.title;
        const content = singleArticle.content;
        const link = singleArticle.url;
        const date = singleArticle.publishedAt;

        //   DIV ERSTELLEN in dem sich die Konstanten befinden.
        let boxArticle = document.createElement("article");

        //   IMG
        let image = document.createElement("img");
        image.setAttribute("src", img);
        image.setAttribute("alt", title);
        boxArticle.appendChild(image);

        //   AUTHOR
        let authorOfArticle = document.createElement("h5");
        authorOfArticle.textContent = author;
        boxArticle.appendChild(authorOfArticle);

        //   TITEL
        let titleOfArticle = document.createElement("h2");
        titleOfArticle.textContent = title;
        boxArticle.appendChild(titleOfArticle);

        //   CONTENT
        let contentOfArticle = document.createElement("p");
        contentOfArticle.textContent = content;
        boxArticle.appendChild(contentOfArticle);

        //   LINK
        let linkToArticle = document.createElement("a");
        linkToArticle.href = link;
        linkToArticle.target = "_blank";
        linkToArticle.innerHTML = "READ MORE";
        boxArticle.appendChild(linkToArticle);

        //   DATE
        let dateOfArticle = document.createElement("p");
        dateOfArticle.textContent = date.split("T")[0];
        dateOfArticle.style.textAlign = "end";
        boxArticle.appendChild(dateOfArticle);

        //   DIV IN OUTPUT AUSGEBEN
        output.appendChild(boxArticle);
      });
    })
    .catch((err) => {
      console.log("Fehler beim Laden", err);
    });
};

console.log("This is p");

let newsContainer = document.getElementById("newsContainer");

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=74e3f388e99b4e438f84957cf21ce05a",
  true
);

xhr.getResponseHeader("Content-type", "application/json");

let defaultImgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Al_Jazeera_English_Doha_Newsroom_1.jpg/390px-Al_Jazeera_English_Doha_Newsroom_1.jpg";

xhr.onload = function () {
  if (this.status === 200) {
    let res = JSON.parse(this.responseText);
    console.log(res.articles);

    let str = "";
    res.articles.forEach(function (ele) {
      str += `
                <div class="mx-2 my-2 card" style="width: 18rem;">
                    <img src="${
                      ele.urlToImage !== null ? ele.urlToImage : defaultImgUrl
                    }" class="card-img-top" alt="Article Image">
                    <div class="card-body">
                        <h5 class="card-title">${
                          ele.title !== null ? ele.title : ""
                        }</h5>
                        <p class="card-text">${
                          ele.description !== null ? ele.description : ""
                        }</p>
                        <a href="${
                          ele.url
                        }" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </div>
                `;
    });
    newsContainer.innerHTML = str;
  } else {
    console.log("Some error occurred");
  }
};

xhr.send();

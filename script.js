function getCatImage() {
  const divImgContainer = document.getElementById("image-container");

  const createImgElement = document.createElement("img");

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createImgElement.src = data[0].url;
      console.log(data[0].url);
      divImgContainer.appendChild(createImgElement);
    });
}

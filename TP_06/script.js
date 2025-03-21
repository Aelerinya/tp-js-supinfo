function isAtEndOfPage() {
  return window.scrollY + window.innerHeight >= document.body.scrollHeight;
}

const gallery = document.getElementById("gallery");

fetch("https://api.imgur.com/3/gallery/hot/viral/day/1", {
  headers: {
    Authorization: "Client-ID XXXX", // Removed for privacy
  },
})
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    console.log(result);

    const listImageURL = result.data
      .filter((i) => i.images)
      .map((i) => i.images[0].link);

    console.log(listImageURL);

    function addPhotosToGallery() {
      const imagesToAdd = listImageURL.splice(0, 10);
      console.log(imagesToAdd);

      for (const imageURL of imagesToAdd) {
        const image = document.createElement("img");
        image.setAttribute("src", imageURL);
        image.setAttribute("width", 300);
        image.setAttribute("height", 300);
        gallery.appendChild(image);
      }
    }

    addPhotosToGallery();

    document.addEventListener("scroll", function () {
      if (isAtEndOfPage()) {
        addPhotosToGallery();
      }
    });
  });

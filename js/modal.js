const modal = document.getElementById("comment");
const open = document.getElementsByClassName("open");
const close = document.getElementById("modal-close");
const body = document.querySelector("body");

const openModal = (id) => {
  modal.style.display = "block";
  body.style.overflow = "hidden";

  const commentMedia = document.getElementById("comment-media");
  const comment = document.getElementById(String(id));

  if (comment.dataset.type === "image") {
    commentMedia.innerHTML = `
            <img src="img/comment_image.png" alt="comment">
        `;
  } else if (comment.dataset.type === "video") {
    commentMedia.innerHTML = `
            <video id="video" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                autoplay controls ></video>
        `;
  }

  document.getElementById("modal-rating").innerHTML = `
        <img src="img/stars_${comment.dataset.stars}.png" alt="rating" width="95">
    `;

  document.getElementById("modal-text").innerHTML = `
        ${comment.dataset.full}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus earum repellendus tempora dicta. 
        Minus, aliquam voluptates. Quia, iste? Sit omnis ipsum dicta impedit iusto enim nam velit nesciunt dolorem odio.
    `;
};

const closeModal = () => {
  modal.style.display = "none";
  body.style.overflow = "auto";

  const video = document.getElementById("video");

  if (video) {
    video.pause();
    video.currentTime = 0;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Array.from(open).forEach((el) => {
    el.addEventListener("click", () => {
      openModal(el.dataset.id);
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      closeModal();
    }
  });

  close.addEventListener("click", () => {
    closeModal();
  });
});

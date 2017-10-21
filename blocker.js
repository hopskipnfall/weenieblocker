let posts;

const WEENIE_REGEX = /(matchup|\bmus?\b|tier list)/;
const REFRESH_RATE_SEC = 3;

function removeWeenies() {
  posts = document.getElementsByClassName('userContent');

  for (let i = 0; i < posts.length; i++) {
    if (WEENIE_REGEX.test(posts.item(i).innerHTML)) {
      let weenie = posts.item(i).parentNode.parentNode.parentNode.parentNode.parentNode;
      console.log('Blocking weenie', weenie);
      weenie.parentNode.removeChild(weenie);
    }
  }
}

// Schedule execution.
setInterval(removeWeenies, REFRESH_RATE_SEC * 1000);

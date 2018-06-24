function replace() {
  console.log('replace, triggered');
  let allLinks = Array.from(document.querySelectorAll('a'));
  console.log(allLinks.length);
  allLinks.forEach(item => {
    const split = item.href.split('?');
    if (split[0] === 'https://www.youtube.com/watch') {
      const listID = split[1].split('&')[1];
      const newURL = `https://www.youtube.com/playlist?${listID}`;
      item.setAttribute('href', newURL);
      // console.log(item);
      item.addEventListener('click', () => {
        window.location.href = newURL;
      });
      // console.log(item, listID);
    }
  });
}

replace();

// document.body.addEventListener('DOMContentLoaded', replace);
// document.body.addEventListener('yt-navigate-start', replace);
// document.body.addEventListener('yt-navigate-start', replace);

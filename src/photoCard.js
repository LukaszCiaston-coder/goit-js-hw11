export function createPhotoCard(image) {
  const card = document.createElement('div');
  card.classList.add('photo-card');

  const link = document.createElement('a');
  link.href = image.largeImageURL;
  card.appendChild(link);

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;
  img.loading = 'lazy';
  link.appendChild(img);

  const info = document.createElement('div');
  info.classList.add('info');
  card.appendChild(info);

  const likes = createInfoItem('Likes', image.likes);
  const views = createInfoItem('Views', image.views);
  const comments = createInfoItem('Comments', image.comments);
  const downloads = createInfoItem('Downloads', image.downloads);

  info.appendChild(likes);
  info.appendChild(views);
  info.appendChild(comments);
  info.appendChild(downloads);

  return card;
}

function createInfoItem(label, value) {
  const item = document.createElement('p');
  item.classList.add('info-item');
  item.innerHTML = `<b>${label}:</b> ${value}`;
  return item;
}



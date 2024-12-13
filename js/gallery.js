const gallery = document.querySelector('.gallery');
gallery.style.width = '1440px';
gallery.style.height = '696px';
gallery.style.margin = '0 auto';
gallery.style.padding = '24px 156px';
//gallery.style.overflow = 'hidden';
//const body = document.querySelector('.container');

const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//console.log(images); //*масив

images.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  //console.dir(galleryItem); //*об'єкти перевірено
  galleryItem.classList.add('gallery-item');
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery-link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  //console.log(galleryImage.tagName); // IMG
  galleryImage.classList.add('gallery-image');
  galleryImage.src = preview;
  galleryImage.setAttribute('data-source', original);
  galleryImage.alt = description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  gallery.appendChild(galleryItem);
});
// ========== Modal window - 1 ==========
const galleryLinks = document.querySelectorAll('.gallery-link');

/*galleryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    //alert('download blocked'); перевірено
    const largeImageSrc = link.querySelector('img').getAttribute('data-source');

    basicLightbox
      .create(
        `
        <div style="width: 1440px; height: 696px; background-color: rgba(46, 47, 66, 0.8); display: flex; align-items: center; justify-content: center;">
          <img width="1112" height="640" src="${largeImageSrc}">
        </div>
        `
      )
      .show();
  });
});*/
// ========== Modal window - 2 ==========
/*galleryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const largeImageSrc = link.querySelector('img').getAttribute('data-source');

    const instance = basicLightbox.create(`
        <img 
          width="1112" 
          height="640" 
          src="${largeImageSrc}" 
          
        >
    `);

    instance.show();
  });
});*/

// ========== Modal window - 3 ==========
galleryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const largeImageSrc = link.querySelector('img').getAttribute('data-source');

    const instance = basicLightbox.create(
      `
        <img 
          src="${largeImageSrc}" 
          alt="Large Image"
          style="width: 1112px; height: 640px; object-fit: cover; display: block; margin: auto; border-radius: 8px;"
        >
    `,
      {
        className: 'custom-modal',
      }
    );

    instance.show();

    const modalElement = document.querySelector('.basicLightbox');
    modalElement.style.width = '1440px';
    modalElement.style.height = '696px';
    // ========== чомусь не працює ==========
    //modalElement.style.backgroundColor = 'rgba(46, 47, 66, 0.8)';
    //modalElement.style.display = 'flex';
    //modalElement.style.alignItems = 'center';
    //modalElement.style.justifyContent = 'center';
    //modalElement.style.margin = 'auto';
  });
});

/*const ul = document.querySelector('.gallery');
ul.addEventListener('click', clickImage);
style="background-color: rgba(46, 47, 66, 0.8); display: block; margin: auto;"
function clickImage(event) {
  const clickedElement = event.target;

  if (clickedElement.nodeName === 'IMG') {
    const largeImageSrc = clickedElement.getAttribute('data-source');
    console.log(largeImageSrc);
  } else {
    console.log('Bad shot ! 💥');
  }
}*/

//description — текстовий опис зображення, для атрибута alt малого зображення та підпису
//великого зображення в модалці.

// 1) + заборонити завантаження по кліку
// 2) додати опис зображень відповідно вимог
// 3) + перенести стилі на CSS

// ========== Стилізація галереї
/*const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.style.width = '360px';
  img.style.height = '200px';
});

const ul = document.querySelector('.gallery');
ul.style.listStyle = 'none';
ul.style.display = 'flex';
ul.style.flexWrap = 'wrap';
ul.style.gap = '20px 24px'; вилазить на 4px посилання*/
//photo: 360*200, gap-row: 20, gap-column: 24,
// screen: 1440*696, modal: 1440*696, photo: 1112*640

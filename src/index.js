import './styles.css';
import services from './components/services';

// let ammount = 1;



const handleSubmit = e => {
  e.preventDefault();
  const query = e.target.elements[0].value;
  services.getFilmName(query);
  services.searchNewFilms(query);
  if (query !== '') {
    services.searchNewFilms(query);
  } else if (query === '') {
    Swal.fire({
      icon: 'error',
      title: 'There are no films with this name!',
      showConfirmButton: false,
      timer: 1000,
    });
    services.defaultFilms();
  }
};

const showLi = e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const id = e.target.closest('li').id;
  services.showModal(id);
};

const showFavs = e => {
    e.preventDefault();
    if ((services.arr === null)) {
    Swal.fire({
      icon: 'error',
      title: 'There are no films in your watched!',
      showConfirmButton: false,
      timer: 1000,
    });
  } 
  services.showFavs();
  services.drawFavs();
};

const returnToDefault = e => {
  e.preventDefault();
  services.defaultFilms();
};

const message = e => {
  e.preventDefault();
  console.log("dwjknkj")
  Swal.fire({
    title: 'FAREWELL HOODIE!',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates deleniti non delectus et sed similique quam repellat suscipit earum accusamus quibusdam eaque voluptatem alias dignissimos nulla praesentium, dolorum iusto fuga?',
    imageUrl: './img/VK ISOLATION 2022 dark white.png',
    // imageWidth: 400,
    // imageHeight: 200,
    imageAlt: 'Custom image',
  })
}

services.refs.cardAbilitiesBTN.addEventListener('click', message)
// services.refs.favs.addEventListener('click', showFavs)

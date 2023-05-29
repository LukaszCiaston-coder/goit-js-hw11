import axios from 'axios';
import Notiflix from 'notiflix';
import { appendImages, showLoadMoreButton, hideLoadMoreButton } from './gallery.js';

const API_KEY = "36779044-50439618c93dcb9f395d82e01"; 
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
let currentPage = 1;
let currentQuery = '';

export async function handleFormSubmit(event) {
  event.preventDefault();
  
  gallery.innerHTML = ''; 
  currentPage = 1; 
  
  const formData = new FormData(form);
  const query = formData.get('searchQuery');
  
  if (query.trim() === '') {
    return;
  }
  
  currentQuery = query;
  
  try {
    const response = await searchImages(query);
    const images = response.data.hits;
    
    if (images.length === 0) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }
    
    appendImages(images);
    
    if (images.length < 40) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

export async function loadMoreImages() {
  try {
    currentPage++;
    
    const response = await searchImages(currentQuery, currentPage);
    const images = response.data.hits;
    
    if (images.length === 0) {
      Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
      hideLoadMoreButton();
      return;
    }
    
    appendImages(images);
    
    if (images.length < 40) {
      hideLoadMoreButton();
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

function searchImages(query, page = 1) {
  const url = 'https://pixabay.com/api/';
  
  return axios.get(url, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 40,
    },
  });
}

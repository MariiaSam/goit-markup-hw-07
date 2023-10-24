const searchForm = document.querySelector('.form-search');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const wordInput = e.currentTarget.value.toLowerCase().trim('');
});

=====================================

Copy code
const addToFavoritesButton = document.querySelector(".add-to-favorites-button");
const giveARatingButton = document.querySelector(".give-a-rating-button");
const removeFromFavoritesButton = document.querySelector(".remove-from-favorites-button");

document.addEventListener("DOMContentLoaded", function () {
    addToFavoritesButton.addEventListener("click", function () {
        addToFavoritesButton.classList.add("is-hidden");
        giveARatingButton.classList.add("is-hidden");
        removeFromFavoritesButton.classList.remove("is-hidden");
    });

    removeFromFavoritesButton.addEventListener("click", function () {
        addToFavoritesButton.classList.remove("is-hidden");
        giveARatingButton.classList.remove("is-hidden");
        removeFromFavoritesButton.classList.add("is-hidden");
    });
});
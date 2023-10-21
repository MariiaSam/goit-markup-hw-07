import { fetchExercise } from './api';

const modalContent = document.querySelector('.exercise-modal__content');

async function getExercise() {
  const data = await fetchExercise('id');

  modalContent.insertAdjacentHTML(
    'beforeend',
    renderExerciseModal(data.results)
  );
}
getExercise();

export function renderExerciseModal(arr) {
  const infoExercise = arr
    .map(
      ({
        bodyPart,
        equipment,
        gifUrl,
        name,
        target,
        description,
        rating,
        burnedCalories,
        time,
        popularity,
      }) => {
        return ` 
    <div class="exercise-modal-tumb">
            <img
              class="exercise-modal__img"
              src="${gifUrl}" 
              alt="exercise"
              width="295"
              height="259"
            />
            <div class="exercise-modal-tumb_card">
              <h2 class="exercise-modal__title">${makeUpperCaseFirst(name)}</h2>
              <p class="exercise-modal-rating__number">${rating}</p>
              <ul class="exercise-modal-list">
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Target</h3>
                  <p class="exercise-modal-list__text">${makeUpperCaseFirst(
                    target
                  )}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Body Part</h3>
                  <p class="exercise-modal-list__text">${makeUpperCaseFirst(
                    bodyPart
                  )}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Equipment</h3>
                  <p class="exercise-modal-list__text">${makeUpperCaseFirst(
                    equipment
                  )}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Popular</h3>
                  <p class="exercise-modal-list__text">${popularity}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Burned calories</h3>
                  <p class="exercise-modal-list__text">${burnedCalories}/${time}min</p>
                </li>
              </ul>
              <p class="exercise-modal__description">
               ${makeUpperCaseFirst(description)}
              </p>
            </div>
          </div>
          <ul class="exercise-modal-button">
            <li class="exercise-modal_item">
              <button
                type="button"
                class="exercise-modal-favorite__button" data-id=${_id}>
                Add to favorites
                <span>
                  <svg class="modal-exercise-heart-icon">
                      <use href=""></use>
                  </svg>
                </span>
              </button>
            </li>

            <li class="exercise-modal_item">
<button type="button" class="exercise-modal-button__rating">
              Give a rating
            </button>
            </li>
          </ul>`;
      }
    )
    .join('');
  return infoExercise;
}

function makeUpperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1); //Метод charAt() возвращает указанный символ из строки.
}

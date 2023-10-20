function renderExerciseModal({
  _id,
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
}) {
  return ` 
 <img class="exercise-modal__img" src="${gifUrl}"  alt="exercise" width="270" height="259"/> 
 <h2 cclass="exercise-modal__title>"${name}</h2> 
 <div class="exercise-modal-rating">
 <p class="exercise-modal-rating__number">${rating}</p>
 <div class="exercise-modal-rating_stars"></div> 
 </div>

 <p class="exercise-modal__description">${description}</p>

 

  `;
}

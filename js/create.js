// import {fetchExercise} from
// const obj = {

//     "_id": "64f389465ae26083f39b17a4",
//     "bodyPart": "waist",
//     "equipment": "body weight",
//     "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0003.gif",
//     "name": "air bike",
//     "target": "abs",
//     "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//     "rating": 4.33,
//     "burnedCalories": 312,
//     "time": 3,
//     "popularity": 4
//   }

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
 <$ class="exercise-modal__title">${name}</h2> 


 <p class="exercise-modal-rating__number">${rating}</p>

 <ul class="exercise-modal-list">
 <li class="exercise-modal-list-item">
   <h3>Target</h3>
   <p>${target}</p>
 </li>
 <li class="exercise-modal-list-item">
   <h3>Body Part</h3>
   <p>${bodyPart}</p>
 </li>
 <li class="exercise-modal-list-item">
   <h3>Equipment</h3>
   <p>${equipment}</p>
 </li>
 <li class="exercise-modal-list-item">
   <h3>Popular</h3>
   <p>${popularity}</p>
 </li>
 <li class="exercise-modal-list-item">
   <h3>Burned calories</h3>
   <p>${burnedCalories}/${time}min</p>
 </li>
</ul>

 <p class="exercise-modal__description">${description}</p>

 <div class="exercise-modal-button">

 <div class="exercise-modal-favorite"> 
 button type="button" class="exercise-modal-favorite__button" data-id=${_id}>Add to favorites
 
 </button>
</div>
 <button type="button" class="exercise-modal-button__rating">Give a rating</button>
</div>`;
}

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
const heartIconUnchecked = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09128 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z" stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const heartIconChecked = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17.3671 3.84172C16.9415 3.41589 16.4361 3.0781 15.8799 2.84763C15.3237 2.61716 14.7275 2.49854 14.1254 2.49854C13.5234 2.49854 12.9272 2.61716 12.371 2.84763C11.8147 3.0781 11.3094 3.41589 10.8838 3.84172L10.0004 4.72506L9.11709 3.84172C8.25735 2.98198 7.09128 2.49898 5.87542 2.49898C4.65956 2.49898 3.4935 2.98198 2.63376 3.84172C1.77401 4.70147 1.29102 5.86753 1.29102 7.08339C1.29102 8.29925 1.77401 9.46531 2.63376 10.3251L3.51709 11.2084L10.0004 17.6917L16.4838 11.2084L17.3671 10.3251C17.7929 9.89943 18.1307 9.39407 18.3612 8.83785C18.5917 8.28164 18.7103 7.68546 18.7103 7.08339C18.7103 6.48132 18.5917 5.88514 18.3612 5.32893C18.1307 4.77271 17.7929 4.26735 17.3671 3.84172Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


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
 <h2 class="exercise-modal__title>"${name}</h2> 

 <div class="exercise-modal-rating">
 <p class="exercise-modal-rating__number">${rating}</p>
 <div class="exercise-modal-rating_stars"></div> 
 </div>

 <ul class="exercise-modal-list">
 <li class="exercise-modal-list-item">
   <h3>Target</h3>
   <p>${target}</p>
 </li>
 <li class="exercise-modal-list-item">
   <h3>Body Part</h3>
   <p><${bodyPart}/p>
 </li>
 <li class="exercise-modal-list-item">
   <h3>Equipment</h3>
   <p>${equipment}</p>
 </li>
 <li class="exercise-modal-list-item">
   <h3>Popular</h3>
   <spam>${popularity}</spam>
 </li>
 <li class="exercise-modal-list-item">
   <h3>Burned calories</h3>
   <spam>${burnedCalories}/${time}</spam>
 </li>
</ul>

 <p class="exercise-modal__description">${description}</p>

 <div class="exercise-modal-button">

 <div class="exercise-modal-favorite"> 
 button type="button" class="exercise-modal-favorite__button" data-id=${_id}>Add to favorites</button>
 <input type="checkbox" class="exercise-modal-favorite__checkbox"/>
<label class="exercise-modal-checkbox__label">
<span class="unchecked-heart">${heartIconUnchecked}</span>
<span class="checked-heart">${heartIconChecked}</span>
</label
</div>


 <button type="button" class="exercise-modal-button__">Give a rating</button>
</div>`;
}

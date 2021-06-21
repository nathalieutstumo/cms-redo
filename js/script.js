async function getPosts() {
    try { 
        const response = await fetch('http://cms.ntoni.tech/wp-json/wp/v2/posts');
        const jsonObject = await response.json();
        console.log(jsonObject);
        const jsonArray = jsonObject;
        console.log('something', jsonArray);
    

        for (let i = 0; i < jsonArray.length; i++) {
            document.querySelector('.cards').innerHTML += `
              <div class="card">
              
                  <h2>${jsonArray[i].title.rendered}</h2>
                  <p>${jsonArray[i].excerpt.rendered}</p>
                  <img class ="cardimg" src="${jsonArray[i].fi_300x180}">
                  <div class="readmore_btn">
                  <a href="details.html?id=${jsonArray[i].id}">Read More</a>
                  </div>
              </div>
            `;
          }
    
}
catch (error) {
// document.querySelector('.alert').innerHTML = showAlertTouser(
//     'An error occured',
//     'danger'
    // )
    ;
}finally {
    // setTimeout(function () {
    //     document.querySelector('.alert').innerHTML = ' ';
    // }, 3000);
}
}
getPosts();



function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if (name == '' || email == '') {
      alert('All fields must be filled out');
      return false;
    }
    return true;
  }
const image_elements = ["images/car1.jpg","images/car2.jpg","images/car3.jpg","images/car4.jpg","images/car5.jpg"]
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    document.querySelector("#left_button").addEventListener("click", evt => {
        let firstLink = image_elements.shift();
        image_elements.push(firstLink);
        for (let i = 0; i < images.length; i++) {
            images[i].src = image_elements[i];
        }
    });
    document.querySelector("#right_button").addEventListener("click", evt => {
        let lastLink = image_elements.pop();
        image_elements.unshift(lastLink);
        for (let i = 0; i < images.length; i++) {
            images[i].src = image_elements[i];
        }
    });
})
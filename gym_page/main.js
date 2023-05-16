let imgArray = ['url(\'gym.jpg\')', 'url(\'dumbbell.jpg\')'];
const radioBtn = document.querySelectorAll('.radiobtn button');
const images = document.querySelectorAll('.expert-trainers img');
const icons = document.querySelectorAll('.expert-trainers p');
const bodyImage = document.querySelector('.body-image');
for(let i=0; i<images.length; i++)
{
    images[i].addEventListener('mouseover',() => {
        icons[i].style.display = "block";
       })
}
for(let i=0; i<images.length; i++)
{
    images[i].addEventListener('mouseout',() => {
        icons[i].style.display = "none";
       })
}

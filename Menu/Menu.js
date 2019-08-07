/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const header = document.querySelector('.header');

header.appendChild(create(menuItems));


function create(arr) {

  const menu = document.createElement('div');
  const ul = document.createElement('ul');

  const newArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(document.createElement('li'));
  // };

  arr.forEach(item => {
    newArr.push(document.createElement('li'));
  })

  menu.appendChild(ul);

  newArr.forEach(li => {
    ul.appendChild(li);
  });

  menu.classList.add('menu');

  newArr.forEach((item, index) => {
    item.textContent = arr[index];
  });

  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', e => {
    menu.classList.toggle('menu--open');
  });

  return menu;

};
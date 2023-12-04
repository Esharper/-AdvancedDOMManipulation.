'use strict';

document.addEventListener('DOMCONTENTLOADED', function () {
const header=document.querySelector('header');
console.log('Selected header:', header);

});

const listItems=document.querySelectorAll('li');

console.log('List Items:', listItems);  

for(let i =0; i <listItems.length; i++){
    listItems[i].addEventListener('click',()=>{
        
    })
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = 'lightblue';

const mainContainer = document.getElementById('main-container');
    const listContainer = document.getElementById('list-container');

    // Example: Adding content to the main container
    mainContainer.innerHTML = '<p>This is Elgin Best Cars TO Drive</p>';

    // Example: Adding list items to the list container
    const listItem1 = document.createElement('li');
    listItem1.textContent = 'Range Rover';

    listContainer.appendChild(listItem1);
    }

    // const allButtons = document.querySelectorAll('[class^="btn-"]');

    // // Loop through each button and log information
    // allButtons.forEach((button, index) => {
    //     console.log(`Button ${index + 1} New Item:`, button.textContent);
    //     console.log(`Button ${index + 1} Class:`, button.className);
    // });


    function handleButtonClick(event) {
        const buttonClass = event.target.className;

        if (buttonClass === 'btn-1') {
            // Add a new li item to list-container with text "New Item"
            const newItem = document.createElement('li');
            newItem.textContent = 'New Item';
            document.getElementById('list-container').appendChild(newItem);

            console.log('Button 1 Clicked: Added a new li item to list-container with text "New Item"');
        } else if (buttonClass === 'btn-2') {
            // Change the text of all li items to "Updated Item"
            const listItems = document.querySelectorAll('#list-container li');
            listItems.forEach(item => {
                item.textContent = 'Updated Item';
                listItems.forEach(item => {
                    item.addEventListener('click', function() {
                        // Toggle the highlight class
                        item.classList.toggle('fire');
                    });
                });
            });

            console.log('Button 2 Clicked: Changed the text of all li items to "Updated Item"');
        } else if (buttonClass === 'btn-3') {
            // Remove the last li item from list-container
            const listContainer = document.getElementById('list-container');
            const lastItem = listContainer.lastElementChild;
            if (lastItem) {
                listContainer.removeChild(lastItem);
                console.log('Button 3 Clicked: Removed the last li item from list-container');
            } else {
                console.log('Button 3 Clicked: No li item to remove from list-container');
            }
        }
    }

    // Add click event listeners to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });


    // Get all li items in list-container
    

    // Add click event listeners to toggle the highlight class
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle the highlight class
            item.classList.toggle('fire');
            this.classList.toggle('fire','fire2','fire3');
        });
    });
// import services and utilities

// import component creators
import createBeanieList from './componets/BeanieList.js';
// declare state variables
let beanies = [];
// write handler functions

// Create each component: 
const BeanieList = createBeanieList(document.querySelector('#beanie-list'));
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component

function display() {
    // Call each component passing in props that are the pieces of state this component needs
    BeanieList({ beanies });
}

// Call display on page load
display();

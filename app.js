// import services and utilities
import { getBeanies } from './services/fetch-beanie.js';
// import component creators
import createBeanieList from './components/BeanieList.js';
import createPaging from './components/Paging.js';
import createFilter from './components/Filter.js';

// declare state variables
let color = '';
let astroSign = '';
let page = 1;
let pageSize = 10;
let totalPages = 0;
let beanies = [];

// write handler functions
async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);

    color = params.get('color') || '';
    astroSign = params.get('astroSign') || '';
    //grabs page from url params on 23 24 says if this exists set page equal to it
    //if not set it equal to one
    const pageParam = Number(params.get('page'));
    page = pageParam ? pageParam : 1;

    const pageSizeParam = Number(params.get('pageSize'));
    pageSize = pageSizeParam ? pageSizeParam : 10;

    //calculate start and end of range from page and Pagesize
    const start = (page - 1) * pageSize;
    const end = (page * pageSize) - 1;
    const { data, count } = await getBeanies(color, astroSign, start, end);
    beanies = data;

    totalPages = Math.ceil(count / pageSize);

    display();
}

function handleFilter(dog) {
    //sets params equal to the value read in the url from the server
    const params = new URLSearchParams(window.location.search);

    //takes form inputs from user and changes the information gotten from server 
    params.set('color', dog.color);
    console.log(color);
    params.set('astroSign', dog.astroSign);
    params.set('page', 1);

    //sets these new params as a string in the URL 
    window.location.search = params.toString();
}

function handlePaging(change, size) {
    const params = new URLSearchParams(window.location.search);

    if (Number(size) === pageSize) {
        page = Math.max(1, page + change);
    }
    else {
        page = 1;
    }
    //important these params be set after Number converts the size
    //string to a number in the block
    params.set('page', page);
    params.set('pageSize', size);

    window.location.search = params.toString();
}

// Create each component: 
const BeanieList = createBeanieList(document.querySelector('#beanie-list'));
const Paging = createPaging(document.querySelector('#paging'), { handlePaging });
const Filter = createFilter(document.querySelector('#filter'), { handleFilter });
// - pass in the root element via querySelector

// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component

function display() {
    // Call each component passing in props that are the pieces of state this component needs
    Filter({ color, astroSign });
    Paging({ page, pageSize, totalPages });
    BeanieList({ beanies });
}

handlePageLoad();

// Call display on page load
// display();

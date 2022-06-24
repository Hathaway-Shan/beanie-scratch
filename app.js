// import services and utilities
import { getBeanies } from './services/fetch-beanie.js';

// import component creators
import createBeanieList from './components/BeanieList.js';
import createPaging from './components/Paging.js';

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
    page = Number(params.get('page')) || 1;
    pageSize = Number(params.get('pageSize')) || 10;

    //calculate start and end of range from page and Pagesize
    const start = (page - 1) * pageSize;
    const end = (page * pageSize) - 1;

    const { data, count } = await getBeanies(color, astroSign, { start, end });
    beanies = data;

    totalPages = Math.ceil({ data, count }.count / pageSize);

    beanies = await getBeanies();
    display();
}

function handlePaging(change, size) {
    const params = new URLSearchParams(window.location.search);

    params.set('page', page);
    params.set('pageSize', size);

    if (size === pageSize) {
        page = Math.max(1, page + change);
    }
    else {
        page = 1;
    }

    window.location.search = params.toString();
}

// Create each component: 
const BeanieList = createBeanieList(document.querySelector('#beanie-list'));
const Paging = createPaging(document.querySelector('#paging'), { handlePaging });
// - pass in the root element via querySelector

// - pass any needed handler functions as properties of an actions object 

// Roll-up display function that renders (calls with state) each component

function display() {
    // Call each component passing in props that are the pieces of state this component needs
    Paging({ page, pageSize, totalPages });
    BeanieList({ beanies });
}

handlePageLoad();

// Call display on page load
display();

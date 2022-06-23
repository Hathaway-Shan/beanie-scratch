import { getBeanie } from '../services/fetch-beanie.js';
import { createBeanieDetail } from '../components/BeanieDetail.js';

let beanie = {};

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) window.location = '../index.html';

    beanie = await getBeanie(id);

    display();
}

//create components
const BeanieDetail = createBeanieDetail(document.querySelector('#beanie-detail'));


function display() {
    BeanieDetail({ beanie });
}

handlePageLoad();
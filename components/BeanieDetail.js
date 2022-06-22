export function createBeanieDetail(root) {
    const img = root.querySelector('img');
    const name = root.querySelector('.beanie-name');

    return ({ beanie }) => {

        img.src = beanie.image;
        name.textContent = beanie.title;
    };
}


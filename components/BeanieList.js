//ask Dane or Andrew for clarification to better understand this function
export default function createBeanieList(root) {
    return ({ beanies }) => {
        root.innerHTML = '';
        for (let beanie of beanies) {
            const li = BeanieCard({ beanie });
            root.append(li);
        }
    };
}

export function BeanieCard({ beanie }) {
    const li = document.createElement('li');
    //'a' tag in html is for a link
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');
    //adds class to the created li element
    a.classList.add('beanie-card');
    //point the created element contents towards the information on supabase
    p.textContent = beanie.title;
    img.src = beanie.image;
    //this href n

    //goes to newPage puts id into HTTP path to access id info later
    a.href = `./newPage/?id=${beanie.id}`;

    a.append(p, img);
    li.append(a);

    return li;
}
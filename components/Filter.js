export default function createFilter(form, { handleFilter }) {
    const input = form.querySelector('input');
    const select = form.querySelector('select');

    form.addEventListener('submit', (e) => {
        const formData = new FormData(form);
        handleFilter(color: formData.get('color'), formData.get('astroSign'));
    })
}

return ({ color, age }) => {
    input.value = color || '';
    select.value = astroSign || '';
}
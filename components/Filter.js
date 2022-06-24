export default function createFilter(form, { handleFilter }) {
    const input = form.querySelector('input');
    const select = form.querySelector('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        const title = formData.get('title');
        const astroSign = formData.get('astroSign');

        handleFilter(
            { title, astroSign }
        );
    });


    return ({ title, astroSign }) => {
        input.value = title;
        select.value = astroSign;
    };
}
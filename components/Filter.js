export default function createFilter(form, { handleFilter }) {
    const input = form.querySelector('input');
    const select = form.querySelector('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        const dog = {
            color: formData.get('color'),
            astroSign: formData.get('astroSign'),
        };

        handleFilter(
            { dog }
        );
    });


    return ({ color, astroSign }) => {
        input.value = color;
        select.value = astroSign;
    };
}
export default function createFilter(form, { handleFilter }) {
    const input = form.querySelector('input');
    const select = form.querySelector('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        //because we made color and astroSign into an object it has to be
        //destructured in the handleFilter function of app.js
        const beanieProps = {
            color: formData.get('color'),
            astroSign: formData.get('sunSign'),
        };

        handleFilter(
            { beanieProps }
        );
    });


    return ({ color, astroSign }) => {
        input.value = color;
        select.value = astroSign;
    };
}
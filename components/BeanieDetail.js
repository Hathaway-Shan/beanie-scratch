export function createBeanieDetail(root) {
    const img = root.querySelector('img');
    const name = root.querySelector('.beanie-name');
    const bbLink = root.querySelector('a');
    const [theme, birthday, releaseDate, releaseYear, astroSign, color, STG, TTG, retirementDate, animal] = root.querySelectorAll('p');

    return ({ beanie }) => {

        img.src = beanie.image;
        name.textContent = beanie.title;
        bbLink.href = beanie.link;
        theme.textContent = beanie.theme;
        birthday.textContent = beanie.birthday;
        releaseDate.textContent = beanie.releaseDate;
        releaseYear.textContent = beanie.releaseYear;
        astroSign.textContent = beanie.astroSign;
        color.textContent = beanie.color;
        STG.textContent = beanie.swingTagGeneration;
        TTG.textContent = beanie.tushTagGeneration;
        retirementDate.textContent = beanie.retirementDate;
        animal.textContent = beanie.animal;
    };
}


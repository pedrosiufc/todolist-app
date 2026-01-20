import IconSun from '/images/icon-sun.svg';
import IconMoon from '/images/icon-moon.svg';

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            backgroundColor: 'bg-neutral-very-light-grayish-blue',
            textColor: 'text-neutral-dark-grayish-blue',
        },
        todo: {
            backgroundColor: 'bg-neutral-very-light-gray',
            borderColor: 'border-neutral-very-light-grayish-blue',
            textColor: 'text-neutral-very-dark-grayish-blue'
        },
        icon: IconMoon
    },

    dark: {
        name: 'dark',
        layout: {
            backgroundColor: 'bg-neutral-very-dark-blue',
            textColor: 'text-neutral-light-grayish-blue-dark'
        },
        todo: {
            backgroundColor: 'bg-neutral-very-dark-desaturated-blue',
            borderColor: 'border-neutral-very-dark-grayish-blue',
            textColor: 'text-neutral-light-grayish-blue',
        },
        icon: IconSun
    },
};
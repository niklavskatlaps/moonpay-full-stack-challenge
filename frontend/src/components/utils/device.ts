export const size = {
    mobile: 599,
    tablet: 959,
    desktop: 1280
};

export const device = {
    mobile: `@media (max-width: ${size.mobile}px)`,
    tablet: `@media (min-width: ${size.tablet} and max-width: ${size.desktop}px)`,
    desktop: `@media (min-width: ${size.desktop}px)`
};

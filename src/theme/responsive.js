import { css } from "styled-components";

export const sizes = {
	xxDesktop: 1600,
	xDesktop: 1200,
	desktop: 992,
	tablet: 768,
	bigPhone: 575,
	phone: 480,
	smallPhone: 400,
	xSmallPhone: 360
};

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)};
		}
	`;
	return acc;
}, {});

export default media;
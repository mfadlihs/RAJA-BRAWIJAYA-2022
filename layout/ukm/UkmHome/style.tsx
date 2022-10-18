import styled from "@emotion/styled";

interface UkmCategoryProps {
	isActive: boolean;
}

export const UkmCategory = styled.div<UkmCategoryProps>`
	-webkit-text-fill-color: ${({ isActive }) =>
		isActive ? "#147167" : "transparent"};
	-webkit-text-stroke-color: #147167;
	text-align: center;
	transition: ease 1s;
	padding-top: 10px;
	padding-bottom: 10px;
	border-top: ${({ isActive }) => isActive && "4px solid #147167"};
	border-bottom: ${({ isActive }) => isActive && "4px solid #147167"};
	&:hover {
		cursor: pointer;
	}
	@media (min-width: 1024px) {
		-webkit-text-stroke-width: 3px;
		border-top: ${({ isActive }) => isActive && "4px solid #147167"};
		border-bottom: ${({ isActive }) => isActive && "4px solid #147167"};
	}
	@media (min-width: 768px) {
		-webkit-text-stroke-width: 2px;
		border-top: ${({ isActive }) => isActive && "3px solid #147167"};
		border-bottom: ${({ isActive }) => isActive && "3px solid #147167"};
		padding-top: 20px;
		padding-bottom: 20px;
	}
	@media (min-width: 640px) {
		-webkit-text-stroke-width: 2px;
		border-top: ${({ isActive }) => isActive && "2.5px solid #147167"};
		border-bottom: ${({ isActive }) => isActive && "2.5px solid #147167"};
	}
	-webkit-text-stroke-width: 1.5px;
`;

interface NavigatorProps {
	isNext: boolean;
}

export const Navigator = styled.div<NavigatorProps>`
	padding: 7px 14px;
	border-radius: 10px;
	border: 1px solid white;
	color: white;
	font-family: "agrandir", "sans-serif";
	user-select: none;
	width: max-content;
	position: absolute;
	z-index: 100;
	top: 50%;
	&:hover {
		cursor: pointer;
	}
	transition: ease 0.1;
	&:active {
		background: #147167;
	}
	${({ isNext }) => (isNext ? "right: 50px;" : "left: 50px;")}
`;

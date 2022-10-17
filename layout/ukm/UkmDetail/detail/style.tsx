import styled from '@emotion/styled';

export const Icon = styled.img`
	-webkit-filter: drop-shadow(5px 5px 30px #d9d9d9);
	filter: drop-shadow(5px 5px 30px #d9d9d9);
`;

interface TabWrapperProps {
	active: boolean;
}

export const TabWrapper = styled.div<TabWrapperProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-bottom: ${props => (props.active ? '4px solid #f69534' : '4px solid white')};
  &:hover {
    border-bottom: 4px solid #f69534;
    cursor: pointer;

`;

export const TabContainer = styled.div`
	border-bottom: 4px solid white;
`;

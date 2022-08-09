import styled, { keyframes } from 'styled-components';
import { DivProps, globalProps, InputProps } from './index.types';

export const HeaderTitle = styled.h2`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 20px;
    margin: 10px 0;
    color: white;
    font-size: 48px;
    @media (max-width: 768px) {
        font-size: 24px;
        margin: 10px 0;
    }
    @media (max-width: 480px) {
        font-size: 20px;
        margin: 5px 0;
    }
`;

export const Container = styled.div<DivProps>`
    margin: 5px;
    ${(props) => props.alignCenter && 'text-align: center;'}
    ${(props) => props.inline && 'display: inline-block;'}
    ${(props) => props.imgContainer && `
        width: ${props.sm ? 200 : ((window.innerWidth / 4) - 35)}px;
        background-color: white;
        overflow: hidden;
        border-radius: 5px;

        @media (max-width: 768px) {
            width: 300px;
        }
        @media (max-width: 480px) {
            width: 300px;
        }
        cursor: pointer;
    `}
`;

export const FlexContainer = styled.div<DivProps>`
    margin: 10px 0;
    display: flex;
    flex-direction: ${(props) => props.row ? 'row' : 'column'};
    ${(props) => props.alignCenter && 'align-items: center;'}
    ${(props) => props.justifyCenter && 'justify-content: center;'}
    max-width: ${window.innerWidth}px;
    ${(props) => props.bgColor && `background-color: ${props.bgColor}; margin: 0; padding: 15px;`}
`;

export const Input = styled.input<InputProps>`
    ${props => props.type === 'number' ? `
        max-width: 100px;
        min-width: 100px;
        width: 10%;
    ` : `
        max-width: 700px;
        min-width: 100px;
        width: 60%;
    `}
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    height: 24px;
    font-size: 16px;
    padding: 4px 12px;
    margin: 0 2px;
    font-weight: 500;
    outline: none;
    transition: all 0.1s;
    :focus {
        outline: 1px solid #b0b0b0;
    }
`;

export const Button = styled.button`
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    height: 34px;
    font-size: 16px;
    padding: 4px 12px;
    margin: 0 2px;
    font-weight: 500;
    outline: none;
    transition: all 0.1s;
    :active {
        outline: 1px solid #b0b0b0;
    }
`;

export const Image = styled.div<DivProps>`
    height: ${(window.innerWidth / 4) - 35}px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    ${(props) => props.bgUrl && `background-image: url(${props.bgUrl});`}
    border-radius: 5px;
    margin: 0 2px;
    transition: all 1s;
    :hover {
        transform: scale(1.05);
    }
    @media (max-width: 768px) {
        height: 300px;
    }
    @media (max-width: 480px) {
        height: 300px;
    }
`;

export const ImageDrawer = styled.div`
    height: 100px;
    background-color: white;
    text-align: start;
    h3 {
        margin-bottom: 0;
    }
`;

export const SummaryPreview = styled(Image) <DivProps>`
    width: 100%;
    border-radius: 0 0 5px 5px;
    margin: 0;
    border-bottom: 1px solid #b1b1b1;
`;

export const Title = styled.h1`
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
    text-align: center;
    background: white;
    padding: 5px;
`;

export const PreviewFooter = styled.h5<globalProps>`
    padding: 5px 10px;
    ${props => !props.hideBorder && `
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: #b1b1b1;
    `}
    ${props => props.hide && 'display: none;'}
`;

export const Description = styled(Container)`
    margin: 20px 50px 0;
    text-align: justify;
`;

export const Keyword = styled.span`
    padding: 8px 10px;
    margin: 0 2px;
    border: 1px solid #00055e;
    border-radius: 5px;
    background-color: #00055e;
    color: white;
`;

export const Back = styled.button`
    border: 1px solid #b1b1b1;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: white;
    box-shadow: 4px 3px 18px -6px rgba(0,0,0,0.75);
    cursor: pointer;
`;

export const LoaderContainer = styled.div<globalProps>`
    background: white;
    width: 100%;
    display: ${({ hide }) => hide ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    padding: 50px 0;
`;

const SpinnerAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    z-index: 1;
    :after {
        content: " ";
        display: block;
        width: 72px;
        height: 72px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #b1b1b1;
        border-color: #b1b1b1 transparent #b1b1b1 transparent;
        animation: ${SpinnerAnimation} 1.2s linear infinite;
    }
`;

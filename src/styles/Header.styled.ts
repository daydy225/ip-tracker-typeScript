import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0 6rem 0;
    gap: 1.3rem;
    
    h1 {
        color: white;
        margin-top: 1rem;
    }

    /* MEDIA QUERIES */
    @media screen and (max-width: 768px) {
        
        h1 {
            font-size: 1.5rem;
        }
    }
` 

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    width: 35rem;

    input {
        width: 100%;
        height: 3rem;
        border-top-left-radius: 0.7rem;
        border-bottom-left-radius: 0.7rem;
        border: none;
        padding: 0 1.2rem;
        font-size: inherit;
        font-family: inherit;
        font-weight: 400;
        color: hsl(0, 0%, 17%);
        outline: none;
    }

    button {
        background-color: hsl(0, 0%, 17%);
        color: white;
        border-top-right-radius: 0.7rem;
        border-bottom-right-radius: 0.7rem;
        border: none;
        padding: 1rem;
        cursor: pointer;
        
    }

    /* MEDIA QUERIES */

    @media screen and (max-width: 768px) {
        
        width: 80%;
        border-radius: 0.7rem;
        
        
        input::placeholder {
            font-size: 0.8rem
        }
        
    }
`

export const Image = styled.img`
    max-width: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -5;

    /* MEDIA QUERIES */
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
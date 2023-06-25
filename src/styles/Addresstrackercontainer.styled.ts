import styled from 'styled-components';


export const StyledAddressTrackerContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding: 2rem 5rem 2rem 1rem ;
    position: absolute;
    background-color: #fff;
    z-index: 1000;
    top: 10rem;
    width: 80vw;
    left: 10%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);  
    border-radius: 0.7rem;
     
    p {
        font-size:  1.5rem;
        font-weight: 600;
    }

    & > div {
        display: flex;
        align-items: flex-start;
        width: 100%;
    justify-content: center;
    }
    
 
    /* MEDIA QUERIES */
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap:  1rem;
        padding: 1.5rem;
        text-align: center;
    }
`
export const Divider = styled.div`
     height: 6rem;
     width: 1px;
     background-color: lightgray;
     
        /* MEDIA QUERIES */
    @media screen and (max-width: 768px) { 
        display: none;
    }
`

export const AdrressTrackerItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;


    &:not(:nth-of-type(1)) {
        margin-left: 1.5rem;
    }
    &:first-of-type {
        margin-right: 1.5rem;
    }

     /* MEDIA QUERIES */
     @media screen and (max-width: 768px) {
       margin-left: 0;
       align-items: center;
       justify-content: center;
       gap: 0.3rem;
       

       &:not(:nth-of-type(1)) {
        margin-left: 0;
       }
      &:first-of-type {
        margin-right: 0;
      }

       span {
            font-size: 0.6rem;
       }

       p {
         font-size: 1.2rem;
       }
    }
`
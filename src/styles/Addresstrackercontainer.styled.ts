import styled from 'styled-components';


export const StyledAddressTrackerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 5rem 3rem 1rem ;
    position: relative;
    background-color: #fff;
    top: -5rem;
    margin: 0 10rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);  
    border-radius: 0.7rem;
     
    p {
        font-size:  1.5rem;
        font-weight: 600;
    }

    & > div {
        display: flex;

    }

`
export const Divider = styled.div`
     height: 4rem;
     width: 1px;
     background-color: lightgray;
     
`

export const AdrressTrackerItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    margin-left: 1.5rem;
`
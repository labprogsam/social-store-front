import styled from 'styled-components';

export const StyledContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-top: 15px;
`;

export const StyledMain = styled.div`
    width: 100%;
    padding: 20px;

    span {
        font-weight: 600;
    }
`;

export const StyledLeft = styled.div`
    width: 100%;

    .row {
        display: flex;
        align-items: center;
        justify-content: center;

        .with-margin {
            margin-right: 12px;
        }

        .minor-width {
            width: 40%;
        }
    }
`;

export const StyledRight = styled.div`
    width: 100%;
`;
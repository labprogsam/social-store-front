import styled from 'styled-components';

export const StyledDragAndDrop = styled.label`
    border: 1px dashed #c4c4c4;
    border-radius: 8px;
    text-align: center;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-height: 251px;
    min-width: 60px;
    overflow: hidden;
    cursor: pointer;

    p {
        color: #c4c4c4;
    }

    .downloader {
        margin-bottom: 20px;
    }

    &.minor-upload {
        width: 100px;

        .downloader {
            width: 40px;
            margin: 0;
        }
    }
`;

export const StyledInput = styled.input`
    display: none;
    height: 100%;
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

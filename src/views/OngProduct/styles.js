import styled from 'styled-components';

export const StyledContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding-top: 15px;
    max-width: 1400px;

		@media (max-width: 1000px) {
			flex-direction: column;
		}
`;

export const StyledMain = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .pathing {
        width: 100%;
        max-width: 1400px;
        font-size: 13px;
    }

    .MuiPaper-root {
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px;
            border: 1px solid #c4c4c4;
            box-shadow: none;

            &:hover {
                border: 1px solid #000;
            }
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
		height: 100%;
		margin-top: 16px;
		margin-left: 20px;

		.main-photo {
			height: 251px;
		}

		@media (max-width: 1000px) {
			margin-left: 0;
		}
`;

export const StyledSecondaryImages = styled.div`
	width: 100%;
  display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	margin-top: 20px;
`;

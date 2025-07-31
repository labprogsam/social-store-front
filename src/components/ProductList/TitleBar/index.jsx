import { BarContainer, TitleText } from "./TitleBar.styles";

function TitleBar({ title }) {
    return(
        <BarContainer>
            <TitleText>{title}</TitleText>
        </BarContainer>
    );
}

export default TitleBar;
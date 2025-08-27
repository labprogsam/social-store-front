import { BarContainer, TitleText, StyledButton } from "./styles";
import { ControlPoint } from '@mui/icons-material';

function TitleBar({ title, isCreate=false }) {
	return (
		<BarContainer>
			<TitleText>{title}</TitleText>
			{ isCreate &&
				<StyledButton href="/app/ong/criar-produto">
					<p>Criar</p>
					<ControlPoint />
				</StyledButton>
			}
		</BarContainer>
	);
}

export default TitleBar; 
function Button({ name, func, dataTestId }) {
	return (
		<button data-testid={dataTestId} onClick={ () => func() }>{ name }</button>
	);
}

export default Button;
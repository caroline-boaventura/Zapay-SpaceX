import { dateGeneration } from '../schemas/dateGeneration';

function Body({ data }) {

	const launches = () => {
		if (Array.isArray(data)) {
			return (
				data.map((launche) => (
					<div>
						<h2>{ launche.name }</h2>
						<p>{ `Data de Lançamento: ${dateGeneration(launche['date_unix'])}` }</p>
						<img src={ launche.links.patch.small } alt={ launche.name } />
						<p>{ launche.details }</p>
						<a href={launche.links.wikipedia }>Saiba Mais</a>
					</div>
				))
			)
		}

		return (
			<div>
				<h2>{ data.name }</h2>
					<p>{ `Data de Lançamento: ${dateGeneration(data['date_unix'])}` }</p>
					<img src={ data.links.patch.small } alt={ data.name } />
					<a href={data.links.wikipedia }>Saiba Mais</a>
			</div>
		)
	}

	const homePage = () => {
		return (
			<div>
				<div>&#128640;</div>
				<p>Quer conhecer sobre </p>
			</div>
		)
	}

	return (
		<body>
			{ (data) ? launches() : homePage() }
		</body>
	);
  }
  
  export default Body;
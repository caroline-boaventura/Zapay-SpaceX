import { dateGeneration } from '../schemas/dateGeneration';

function Body({ data }) {

	const launches = () => {
		if (Array.isArray(data)) {
			return (
				data.map((launche) => (
					<div data-testid="launches-card" className="launches">
						<img src={ launche.links.patch.small } alt={ launche.name } />
						<div>
							<h2>{ launche.name }</h2>
							<p>{ `Data de Lançamento: ${dateGeneration(launche['date_unix'])}` }</p>
							<p>{ launche.details }</p>
							<a href={launche.links.wikipedia }>Saiba Mais</a>
						</div>
					</div>
				))
			)
		}

		return (
			<div className="container-unique-launche">
				<img src={ data.links.patch.small } alt={ data.name } />
				<div>
					<h2>{ data.name }</h2>
					<p>{ `Data de Lançamento: ${dateGeneration(data['date_unix'])}` }</p>
					<a href={data.links.wikipedia }>Saiba Mais</a>
				</div>
			</div>
		)
	}

	const homePage = () => {
		return (
			<div>
				<div className="rocket-home-page">&#128640;</div>
			</div>
		)
	}

	return (
		<body>
			{ (data) ? <div className="container-launches">{ launches() }</div> : homePage() }
		</body>
	);
  }
  
  export default Body;
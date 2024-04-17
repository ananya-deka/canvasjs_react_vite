import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
	const options = {
		data: [
			{
				dataPoints: [
					{ y: 100 },
					{ y: 100 },
					{ y: 100 },
					{ y: 100 },
					{ y: 100 },
				]
			}
		]

	};

	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	);
}

export default App;

import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light2", //"light1", "dark1", "dark2"
		title:{
			text: "React Column Chart - Vite"
		},
		axisY: {
			includeZero: true
		},
		data: [{
			type: "column", //change type to bar, line, area, pie, etc
			//indexLabel: "{y}", //Shows y value on all Data Points
			indexLabelFontColor: "#5A5757",
			indexLabelPlacement: "outside",
			dataPoints: [
				{ x: 10, y: 71 },
				{ x: 20, y: 55 },
				{ x: 30, y: 50 },
				{ x: 40, y: 65 },
				{ x: 50, y: 71 },
				{ x: 60, y: 68 },
				{ x: 70, y: 38 },
				{ x: 80, y: 92, indexLabel: "Highest" },
				{ x: 90, y: 54 },
				{ x: 100, y: 60 },
				{ x: 110, y: 21 },
				{ x: 120, y: 49 },
				{ x: 130, y: 36 }
			]
		}]
	};
	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	);
}

export default App;

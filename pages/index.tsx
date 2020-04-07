import fetch from "isomorphic-unfetch";
import {
	Charts,
	ChartContainer,
	ChartRow,
	YAxis,
	Resizable,
	BarChart,
	styler,
} from "react-timeseries-charts";
import { TimeSeries, TimeRange, Index as PondIndex } from "pondjs";
import moment from "moment";
const ChartForCity = (props: {
	data: any;
	city: string;
	state: string;
	max: number;
	pop: number;
}) => {
	const city = props.data.filter((e) => e[1] === props.city);
	const data = getDailyData(city, props.city);

	const millions = props.pop / 1000000;

	const timeseries = new TimeSeries({
		name: "corona",
		columns: ["index", "cases"],
		points: data.map(([d, value]) => [
			(PondIndex.getIndexString as any)("1d", new Date(d)),
			value / millions,
		]),
	});
	const style = styler([{ key: "cases", color: "#35C8E1" }]);

	const todayCount = data[data.length - 1][1];
	const todayCountPer = data[data.length - 1][1] / millions;
	const yesterdayCount = data[data.length - 2][1];

	// const symbol = todayCount > yesterdayCount ? '+' : '-';
	const diff = (todayCount - yesterdayCount) / yesterdayCount;
	const rounded = (100 * Math.round(diff * 1000)) / 1000;

	return (
		<div>
			<h2>
				{props.city}, {props.state}
			</h2>
			<Resizable>
				<ChartContainer
					timeRange={
						new TimeRange(moment({ year: 2020, month: 2, day: 1 }), moment())
					}
				>
					<ChartRow height="150">
						<YAxis
							id="cases"
							label="Coronavirus cases"
							min={0}
							max={props.max}
							width="30"
							type="linear"
						/>
						<Charts>
							<BarChart
								axis="cases"
								style={style}
								columns={["cases"]}
								series={timeseries}
								onHighlightChange={(highlight) => {
									if (highlight) {
										let numdisplay = highlight.event.get(highlight.column);
										let numdisplay2 = numdisplay * millions;
										document.getElementById(
											"num"
										).textContent = ` ${numdisplay
											.toFixed(2)
											.toString()} per million (${numdisplay2})`;
									}
								}}
							/>
						</Charts>
					</ChartRow>
				</ChartContainer>
			</Resizable>
			<div>
				{todayCount} cases today ({rounded > 0 ? "+" : ""}
				{rounded}% compared to yesterday)
			</div>
			<div>
				{Math.round(todayCountPer * 1000) / 1000} per million people today
			</div>
			<h1 id="num"></h1>
		</div>
	);
};

const Index = (props: { data: any; lastUpdated: string; max: number }) => {
	return (
		<>
			<div>Last updated: {props.lastUpdated}</div>

			<ChartForCity
				city="San Francisco"
				state="California"
				data={props.data}
				max={props.max}
				pop={884363}
			/>
			<ChartForCity
				city="Ozaukee"
				state="Wisconsin"
				data={props.data}
				max={props.max}
				pop={88429}
			/>
			<ChartForCity
				city="King"
				state="Washington"
				data={props.data}
				max={props.max}
				pop={2189000}
			/>
		</>
	);
};
const getDailyData = (array: string[][], county: string): any => {
	const singleCounty = array.filter((e) => e[1] === county);
	const dateAndTotal = singleCounty.map((e) => [e[0], e[4]]);
	const daily = dateAndTotal.map((e, index, array) => {
		let ret = e;
		if (index) {
			ret = [
				e[0],
				(
					Number.parseInt(e[1]) - Number.parseInt(array[index - 1][1])
				).toString(),
			];
		}
		return ret;
	});

	return daily;
};

Index.getInitialProps = async function () {
	const res = await fetch(
		"https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv"
	);
	const lastUpdated = new Date().toLocaleDateString();

	const text = await res.text();
	const [headings, ...data] = text.split("\n");
	const table = data.map((e) => e.split(","));
	const dailyData = table.map((e) => {
		[e[0], e[4]];
	});
	console.log(table);
	// console.log(dailyData);
	const max1 =
		Math.max(...getDailyData(table, "King").map((e) => e[1])) /
		(2189000 / 1000000);
	const max = Math.max(
		...table.filter((e) => e.includes("King")).map((e) => Number(e[4]))
	);
	return {
		data: table,
		lastUpdated,
		max: max1,
	};
};

export default Index;

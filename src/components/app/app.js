import { Component } from "react/cjs/react.production.min";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "John C.", salary: 800, prop: false, rise: true, id: 1 },
				{ name: "Alex M.", salary: 3000, prop: false, rise: false, id: 2 },
				{ name: "Carl W.", salary: 5000, prop: false, rise: false, id: 3 },
			],
		};
		this.maxId = this.state.data.length + 1;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => ({
			data: data.filter((item) => item.id !== id),
		}));
	};

	addItem = (name, salary) => {
		const newItem = {
			name: name,
			salary: salary,
			prop: false,
			rise: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => ({
			data: [...data, newItem],
		}));
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	render() {
		const { data } = this.state;
		const propd = data.filter((item) => item.prop).length;

		return (
			<div className="app">
				<AppInfo employees={data.length} propd={propd} />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;

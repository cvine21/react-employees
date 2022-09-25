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
				{
					name: "John C.",
					salary: 800,
					increase: false,
					rise: true,
					id: 1,
				},
				{
					name: "Alex M.",
					salary: 3000,
					increase: false,
					rise: false,
					id: 2,
				},
				{
					name: "Carl W.",
					salary: 5000,
					increase: false,
					rise: false,
					id: 3,
				},
			],
			term: "",
			filter: "all",
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
			increase: false,
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

	searchEmp = (items, term) => {
		if (!term.length) return items;
		return items.filter((item) => item.name.indexOf(term) !== -1);
	};

	onUpdateSearch = (term) => {
		this.setState({ term });
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case "rise":
				return items.filter((item) => item.rise);
			case "moreThan1000":
				return items.filter((item) => item.salary > 1000);
			default:
				return items;
		}
	};

	onFilterSelect = (filter) => {
		this.setState({ filter });
	};

	render() {
		const { data, term, filter } = this.state;
		const increased = data.filter((item) => item.increase).length;
		const filteredData = this.filterPost(data, filter);
		const visibleData = this.searchEmp(filteredData, term);

		return (
			<div className="app">
				<AppInfo employees={data.length} increased={increased} />

				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;

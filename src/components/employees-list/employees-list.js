import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({
	data,
	onDelete,
	onToggleIncrease,
	onToggleRise,
	increase,
	rise,
}) => {
	return (
		<ul className="app-list list-group">
			{data.map((item) => {
				const { id, ...itemProps } = item;
				return (
					<EmployeesListItem
						key={id}
						{...itemProps}
						onDelete={() => onDelete(id)}
						onToggleIncrease={() => onToggleIncrease(id)}
						onToggleRise={() => onToggleRise(id)}
						increase={increase}
						rise={rise}
					/>
				);
			})}
		</ul>
	);
};

export default EmployeesList;

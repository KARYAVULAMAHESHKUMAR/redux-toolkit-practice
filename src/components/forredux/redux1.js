import { useSelector } from "react-redux";

const Redux = () => {

    const countvalue = useSelector((state) => state.redux.value);
    const employees = useSelector((state) => state.redux.employees);

    return (
        <>
            <div>
                <h2>First Component</h2>
                <p>Counter Value: {countvalue}</p>
            </div>

            <div>
                <h3>Employee List</h3>

                {employees.length === 0 ? (
                    <p>No Employees Found</p>
                ) : (
                    employees.map((emp) => (
                        <div
                            key={emp.id}
                            style={{
                                border: "1px solid gray",
                                padding: "5px",
                                // marginBottom: "100px"
                            }}
                        >
                            <p>ID: {emp.id}</p>
                            <p>Name: {emp.name}</p>
                            <p>Salary: {emp.salary}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Redux;
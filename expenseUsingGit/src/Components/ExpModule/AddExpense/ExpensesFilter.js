

const ExpensesFilter = (props) =>{
    const dropDownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    };

return(
    <div className='expenses-filter'>
        <div className="expenses-filter__control">
            <label >Filter By Year</label>
            <select value={props.selected} onChange={dropDownChangeHandler}>
                <option value="2023">2023</option>
                <option value="2022">2023</option>
                <option value="2021">2023</option>
                <option value="2020">2023</option>
                <option value="2019">2023</option>
            </select>
        </div>
        
    </div>
);

};

export default ExpensesFilter;
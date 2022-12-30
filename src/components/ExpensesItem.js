import './ExpensesItem.css';

function ExpensesItem({ date, description, price}) {
        return (
            <div className="expense-item_wrapper">
                <div className="expense-item_date">{date}</div>
                <div className="expense-item_description">
                    <h2>{description}</h2>
                </div>
                <div className="expense-item_price_wrapper">
                    <div className="expense-item_price">
                        {price}
                    </div>
                </div>
            </div>
        )
}

export default ExpensesItem;
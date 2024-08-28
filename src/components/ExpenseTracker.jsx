function ExpenseTracker({
  setAmount,
  setType,
  handleAddTransaction,
  transactions,
  amount,
  type
}) {
  const totalIncome = transactions.reduce(
    (acc, transaction) =>
      transaction.type === "income" ? acc + Number(transaction.amount) : acc,
    0
  );
  const totalExpense = transactions.reduce(
    (acc, transaction) =>
      transaction.type === "expense" ? acc + Number(transaction.amount) : acc,
    0
  );

  const balanceAmount = totalIncome - totalExpense;
  return (
    <div className="border p-5">
      {/* <Header header={header} /> */}

      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-3 my-4">
          <div className="p-2  px-5 border border-purple-600 rounded-md">
            <h2>Total Income</h2>
            <h2>{totalIncome}</h2>
          </div>
          <div className="p-2 px-5 border border-purple-600 rounded-md">
            <h2>Total Expense</h2>
            <h2>{totalExpense}</h2>
          </div>
          <div
            className={`p-2 px-5 border border-purple-600 rounded-md ${
              balanceAmount > 0 ? "bg-green-50" : "bg-red-50"
            }`}
          >
            <h2>Balance</h2>
            <h2>{balanceAmount}</h2>
          </div>
        </div>

        <div className="flex">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-purple-600 rounded-md p-1 mx-2"
            placeholder="Add Amount"
            type="number"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-purple-600 rounded-md p-1 mx-2"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button
            onClick={handleAddTransaction}
            className="border border-purple-600 rounded-md p-1 mx-2 px-2"
          >
            Submit
          </button>
        </div>
      </div>

      <div>
        {transactions.map((data, index) => {
          return (
            <div key={index} className="flex my-2">
              <span></span>
              <h1 className="font-semibold  text-2xl w-60">
                {index + 1}
                {"). "}
                {data.amount}
              </h1>
              <h1
                className={`font-bold  text-3xl ${
                  data.type === "income" ? "text-green-700" : "text-red-600"
                }`}
              >
                {data.type}
              </h1>
              {""}
            </div>
          );
        })}
      </div>
      {/* <Hero hero={hero} />
      <Features features={features} />
      <Testimonial testimonials={testimonials} />
      <Footer header={header} /> */}
    </div>
  );
}

export default ExpenseTracker
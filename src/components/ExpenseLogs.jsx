function ExpenseLogs(props) {
  const allLogs = props.allLogs;
  console.log(allLogs);
  return (
    <div className="log-flex">
      {allLogs.map((log) => {
        return (
          <>
            <div className="log-container">
              <p>Date: {log.date}</p>
              <p>Category: {log.category}</p>
              <p>Amount: {log.amount}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ExpenseLogs;

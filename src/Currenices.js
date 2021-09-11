import data from "./data";

const Currencies = () => {
    return (
        <table className="table">
            <tr>
                <th>Döviz Cinsi</th>
                <th>Alış(TL)</th>
                <th>Satış(TL)</th>
                <th>Farkı(%)</th>
            </tr>
            {data.currencies.map((d, index) => {
                return <tr key={index}>
                    <td>{d.exchangeType}</td>
                    <td>{d.buy}</td>
                    <td>{d.sell}</td>
                    <td>{d.diff}</td>
                </tr>
            }
            )}
        </table>
    )
}

export default Currencies;
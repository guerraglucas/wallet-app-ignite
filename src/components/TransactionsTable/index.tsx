import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import { FaTrashAlt } from "react-icons/fa";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  const { removeTransaction } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <button
                  type="button"
                  className="trash"
                  onClick={() => removeTransaction(transaction.id)}
                >
                  <FaTrashAlt
                    style={{
                      color: "#e52e4d",
                      fontSize: "1.25rem",
                    }}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

import { useTableData } from "../../providers/UsersTableProvider.tsx";
import { useEffect, useState } from "react";

export const BetaTestUsersTable = () => {
  const { items, fetchPage } = useTableData();
  const [perPage, setPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const fetchTableData = async () => {
    await fetchPage(currentPage, perPage);
  };

  useEffect(() => {
    fetchTableData();
  }, [currentPage, perPage]);

  if (!items) {
    return <div>Loading...</div>;
  }
  return (
    <div className="beta-test-table">
      <h1 className={"beta-test-table-title"}>
        Participation listing (enable only for participants)
      </h1>
      <table className={"table-fixed"}>
        <thead>
          <tr
            className={
              "text-[1.5rem] tracking-wider uppercase border-b border-white"
            }
          >
            <th className={"text-left py-2 w-[20%]"}>NAME</th>
            <th className={"text-left py-2 w-[30%]"}>EMAIL</th>
            <th className={"text-left py-2 w-[30%]"}>WALLET</th>
          </tr>
        </thead>
        <tbody>
          {items?.items.map((item, index) => (
            <tr key={index} className="beta-test-table-item">
              <td className="py-3 pr-12 text-left">{item.username}</td>
              <td className="py-3 pr-12 text-left">{item.email}</td>
              <td className="py-3 beta-test-table-wallet">{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={"beta-test-table-pagination w-full font-avenir"}>
        <h1>
          Page {items.meta.currentPage} / {items.meta.totalPages}
        </h1>
        <div className={"flex gap-5 items-center"}>
          <h1>Items per page:</h1>
          <input
            min={"1"}
            className={"beta-test-table-input"}
            type={"number"}
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            value={perPage}
          />

          <h1>Go to page:</h1>
          <input
            min={"0"}
            max={items.meta.totalPages}
            value={currentPage}
            type={"number"}
            className={"beta-test-table-input"}
            onChange={(e) => setCurrentPage(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

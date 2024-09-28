import {useTableData} from "../../providers/UsersTableContext.tsx";
import {useEffect} from "react";

export const BetaTestUsersTable = () => {
  const {items,fetchPage} = useTableData()

    useEffect(() => {
        const fetchData = async () => {
            await fetchPage(0, 10);
        };

        fetchData();
    }, []);
    console.log(items)
  return (
    <div className="beta-test-table">
      <h1 className={"beta-test-table-title"}>
        Participation listing (enable only for participants)
      </h1>
      <table className={"w-full"}>
        <thead>
          <tr
            className={
              "text-[1.5rem] tracking-wider uppercase border-b border-white"
            }
          >
            <th className={"text-left py-2"}>NAME</th>
            <th className={"text-left py-2"}>EMAIL</th>
            <th className={"text-left py-2"}>WALLET</th>
          </tr>
        </thead>
        <tbody>
        {items?.items.map((item, index) => (
            <tr key={index} className="beta-test-table-item">
                <td className="py-3 pr-9 text-left">{item.username}</td>
                <td className="py-3 pr-8 text-left">{item.email}</td>
                <td className="py-3 overflow-hidden whitespace-nowrap text-ellipsis">
                    {item.address}
                </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

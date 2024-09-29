import { useTableData } from "../../../providers/UsersTableProvider.tsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../providers/UserProvider.tsx";
import { X } from "lucide-react";
import { useAnimate } from "../../../hooks/animateMe.ts";

/**
 * Таблица пользователей, зарегистрировавшихся на бета-тестирование.
 */

export const BetaTestUsersTable = () => {
  const { items, fetchPage, listUserInTable } = useTableData();
  const [perPage, setPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const navigate = useNavigate();
  const { user } = useUser();
  const animationClass = useAnimate("beta-test-table");

  const fetchTableData = async () => {
    await fetchPage(currentPage, perPage);
  };

  useEffect(() => {
    fetchTableData();
  }, [currentPage, perPage]);

  if (!items) {
    return <></>;
  }

  return (
    <div className={animationClass}>
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
            <th className={"beta-test-table-row "}>NAME</th>
            <th className={"beta-test-table-row"}>EMAIL</th>
            <th className={"beta-test-table-row"}>WALLET</th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.name &&
            user.email &&
            user.listed &&
            currentPage === 0 && (
              <tr className={"beta-test-table-item text-primary cursor-auto"}>
                <td className="beta-test-table-col-item">{user.name}</td>
                <td className="beta-test-table-col-item">{user.email}</td>
                <td className="beta-test-table-wallet">{user.wallet}</td>
                <td>
                  <X
                    className={"beta-test-table-close-icon"}
                    onClick={() => listUserInTable(false)}
                  />
                </td>
              </tr>
            )}
          {items?.items.map((item, index) => (
            <tr
              key={index}
              className="beta-test-table-item"
              onClick={() =>
                navigate("/userinfo", {
                  state: {
                    name: item.username,
                    email: item.email,
                    wallet: item.address,
                  },
                })
              }
            >
              <td className="beta-test-table-col-item">{item.username}</td>
              <td className="beta-test-table-col-item">{item.email}</td>
              <td className="beta-test-table-wallet">{item.address}</td>
              <td className={"beta-test-table-close-icon"} />
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

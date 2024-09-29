import { NameEmailComponent } from "../NameEmailComponent.tsx";
import { useUser } from "../../../providers/UserProvider.tsx";
import { useTableData } from "../../../providers/UsersTableProvider.tsx";

/**
 * Компонент отвечающий за показ пользователя в таблице.
 */

export const BetaTestListMeComponent = ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => {
  const { listUserInTable } = useTableData();
  const { user } = useUser();
  return (
    <div className={"mt-8 flex flex-col gap-5"}>
      <NameEmailComponent name={name} email={email} />
      <button
        className={"main-button mt-3"}
        onClick={() => listUserInTable(true)}
        disabled={!!user?.listed}
      >
        List me to the table
      </button>
    </div>
  );
};

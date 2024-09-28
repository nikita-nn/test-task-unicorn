export const NameEmailComponent = ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => (
  <>
    <div>
      <label className={"clientarea-label"}>Name</label>
      <p className={"clientarea-data-text"}>{name}</p>
    </div>
    <div>
      <label className={"clientarea-label"}>Email</label>
      <p className={"clientarea-data-text"}>{email}</p>
    </div>
  </>
);

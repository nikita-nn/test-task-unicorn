/**
 * Компонент для корректного отображения email и имени пользователя.
 *
 * @param  props - Свойства компонента.
 * @param {string} props.name - Имя пользователя.
 * @param {string} props.email - Электронная почта пользователя.
 */

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

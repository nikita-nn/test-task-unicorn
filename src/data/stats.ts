/**
 * Предположительная структура данных статистики.
 * @interface
 */
interface IMockStats {
  name: string;
  data: number;
}

/**
 * Предположительные данные статистики.
 */
export const mockStats: IMockStats[] = [
  {
    name: "Lorem ipsum dolor",
    data: 123456,
  },
  {
    name: "Lorem ipsum dolor",
    data: 123456,
  },
  {
    name: "Lorem ipsum dolor",
    data: 123456,
  },
];

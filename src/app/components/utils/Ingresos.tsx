import dayjs from "dayjs";


export const rowsIngresos = {
  Ingresos: [
    {
      _id: '1',
      _idPerfume: '1',
      comision: 100,
      date: dayjs().toDate(),
      netIncome: 900,
      grossIncome: 999999999999999,
      totalIncome: 1000,
    },
    {
      _id: '2',
      _idPerfume: '2',
      comision: 100,
      date: dayjs().toDate(),
      netIncome: 900,
      grossIncome: 999999999999999,
      totalIncome: 1000,
    },
    {
      _id: '2',
      _idPerfume: '2',
      comision: 999999999999999,
      date: dayjs().toDate(),
      netIncome: 900,
      grossIncome: 1000,
      totalIncome: 1000,
    }
  ]
};


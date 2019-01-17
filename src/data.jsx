import { FORM_ELEMENT_TYPE } from "./Util/FormElementType";

export const settings = [
  {
    id: "name",
    title: "Наименование",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "inn",
    title: "ИНН",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "kpp",
    title: "КПП",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "payAcc",
    title: "Р/с",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "bank",
    title: "Банк",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "bic",
    title: "БИК",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "corAcc",
    title: "К/с",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },

  {
    id: "billAmountOnPage",
    title: "К-во квитанций на 1 лист",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "fontSize",
    title: "Шрифт",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "addInfo",
    title: "Доп инфонмация",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "qrAddInfo",
    title: "Добавление в QR",
    type: FORM_ELEMENT_TYPE.INPUT_TEXT
  },
  {
    id: "type",
    title: "Тип обработки",
    type: FORM_ELEMENT_TYPE.SELECT,
    options: [
      {
        name: "НЕСТАНДАРТНАЯ",
        value: "NOT_STANDARD"
      },
      {
        name: "СТАНДАРТНАЯ",
        value: "STANDARD"
      }
    ]
  }
];

export const mainFields = [
  {
    id: "fio",
    title: "ФИО (поле)"
  },
  {
    id: "adr",
    title: "Адрес (поле)"
  },
  {
    id: "sum",
    title: "Сумма (поле)"
  },
  {
    id: "contract",
    title: "Договор (поле)"
  },
  {
    id: "purpose",
    title: "Назначение (поле)"
  },
  {
    id: "kbk",
    title: "КБК (поле)"
  },
  {
    id: "oktmo",
    title: "ОКТМО (поле)"
  },

  {
    id: "fioName",
    title: "ФИО (наименование)"
  },
  {
    id: "adrName",
    title: "Адрес (наименование)"
  },
  {
    id: "sumName",
    title: "Сумма (наименование)"
  },
  {
    id: "contractName",
    title: "Договор (наименование)"
  },
  {
    id: "purposeName",
    title: "Назначение (наименов)"
  },
  {
    id: "kbkName",
    title: "КБК (наименование)"
  },
  {
    id: "oktmoName",
    title: "ОКТМО (наименование)"
  }
];

export const entities = ["mainField", "setting", "func"];

export const munuItems = ["Основные настройки", "Поля", "Функции"];

import EntityService from "./EntityService";
import CommonHelper from "../Util/CommonHelper";
import { entities } from "../data";

class FunctionService extends EntityService {
  constructor() {
    super(entities[2]);
  }

  async createPdf(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("func", 1);
    const result = await super._fetch("POST", formData, true);
    CommonHelper.handleBlob(result, "kvit-001.pdf");
  }

  async getTableData(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("func", 2);
    const result = await super._fetch("POST", formData, false);
    return CommonHelper.convertJsonArr(result);
  }

  static getTextTableHeaders() {
    const c = [
      "Договор",
      "ФИО",
      "Адрес",
      "Назначение",
      "Сумма",
      "КБК",
      "ОКТМО"
    ];
    return c;
  }
}

export default FunctionService;

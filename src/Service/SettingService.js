import EntityService from "./EntityService";
import { entities } from "../data";

class SettingService extends EntityService {
  constructor() {
    super(entities[1]);
  }
}

export default SettingService;

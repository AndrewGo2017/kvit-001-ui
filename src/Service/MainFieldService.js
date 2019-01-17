import EntityService from "./EntityService";
import { entities } from "../data";

class MainFieldService extends EntityService {
  constructor() {
    super(entities[0]);
  }
}

export default MainFieldService;

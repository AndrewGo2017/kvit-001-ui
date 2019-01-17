import EntityData from "./EntityData";

class EntityDataHandler {
  static getEntityDataArray(returned, titles) {
    const entities = [];
    returned.forEach(e => {
      const entityData = titles.find(v => {
        return v.id === e[0] ? true : false;
      });

      const title = entityData ? entityData.title : "";
      const type = entityData.type;
      const options = entityData.options;

      entities.push(new EntityData(e[0], title, e[1], type, options));
    });

    return entities;
  }
}

export default EntityDataHandler;

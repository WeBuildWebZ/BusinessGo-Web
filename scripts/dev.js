import { runSpawn, project } from "./utils";

runSpawn("next", ["dev", project.path, project.name, project.templateName]);

/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
import { spawn, exec } from "child_process";
import config from "./config.json";

const [, , projectName, templateName] = process.argv;

const isTemplate = projectName === "template";

let project = config.projects[projectName];
if (isTemplate) project = project[templateName];

if (!project)
  throw new Error(
    `Project with ${
      isTemplate ? `template "${templateName}"` : `name "${projectName}"`
    } not found`
  );

console.log("project", project);
project.name = projectName;
project.templateName = templateName;

export { project };

export const runSpawn = (command, options = []) => {
  console.log(`--- ${command} ${options.join(" ")}`);
  spawn(command, options, { stdio: "inherit" });
};

export const runExec = (command) => {
  console.log(`--- ${command}`);
  const child = exec(command);

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
};

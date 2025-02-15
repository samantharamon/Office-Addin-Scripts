import { IAssociate } from "custom-functions-metadata";
import CustomFunctionsMetadataPlugin from "./customfunctionsplugin";

function addFunctionAssociations(this: any, source: string): string {
  const input = this.getOptions().input as string;
  if (!CustomFunctionsMetadataPlugin.generateResults[input]) {
    return source;
  }
  CustomFunctionsMetadataPlugin.generateResults[input].associate.forEach(
    (item: IAssociate) => {
      source += `\nCustomFunctions.associate("${item.id}", ${item.functionName});`;
    }
  );
  return source;
}

export = addFunctionAssociations;

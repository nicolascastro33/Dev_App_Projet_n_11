import { FlatsJsonService } from "./auth.service";
import { FlatJsonFile } from "./auth.api";

export type Dependencies = {
    flatService: FlatsJsonService
}

export const dependencies: Dependencies = {
    flatService: FlatJsonFile
}
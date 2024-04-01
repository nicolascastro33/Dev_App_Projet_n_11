import { FlatsService } from "./auth.service";
import { AuthAPI } from "./auth.api";

export type Dependencies = {
    flatsService: FlatsService
}

export const dependencies: Dependencies = {
    flatsService: AuthAPI
}
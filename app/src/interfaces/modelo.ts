import { imprimivel } from "../utils/imprimivel";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends imprimivel, Comparavel<T> {

}
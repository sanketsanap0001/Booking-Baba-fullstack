import { Config } from "@/config/config";
import axios from "axios";


export const client = axios.create({
    baseURL: Config.BASE_URL

});
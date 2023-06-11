"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const test_entry_json_1 = __importDefault(require("./test_entry.json"));
// GET
const user = test_entry_json_1.default;
const getUser = () => user;
exports.getUser = getUser;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const devicesServices = __importStar(require("../services/devices"));
const router = express_1.default.Router();
router.get('/users/toribio', (_req, res) => {
    res.send(devicesServices.getUser());
});
router.get('/users/toribio/temperature/:val', (req, res) => {
    try {
        devicesServices.getUser().houses[0].devices[0].temperatureC = parseInt(req.params.val);
        devicesServices.getUser().houses[0].devices[0].temperatureF = (parseInt(req.params.val) * (9 / 5)) + 32.0;
        res.send(parseInt(req.params.val) + ' °C');
    }
    catch (e) {
        res.status(404).send(e);
    }
});
router.get('/users/toribio/humidity/:val', (req, res) => {
    try {
        devicesServices.getUser().houses[0].devices[0].humidity = parseFloat(req.params.val);
        res.send(parseInt(req.params.val) + ' °C');
    }
    catch (e) {
        res.status(404).send(e);
    }
});
exports.default = router;

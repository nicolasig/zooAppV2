"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zooController_1 = require("../controllers/zooController");
class ZooRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', zooController_1.zooController.list);
        this.router.get('/:id', zooController_1.zooController.getOne);
        this.router.post('/', zooController_1.zooController.create);
        this.router.put('/:id', zooController_1.zooController.update);
        this.router.delete('/:id', zooController_1.zooController.delete);
    }
}
const zooRoutes = new ZooRoutes();
exports.default = zooRoutes.router;

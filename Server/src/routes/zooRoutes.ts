import { Router } from 'express';
import { zooController } from '../controllers/zooController';

class ZooRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', zooController.list);
        this.router.get('/:id', zooController.getOne);
        this.router.post('/', zooController.create);
        this.router.put('/:id', zooController.update);
        this.router.delete('/:id', zooController.delete);
    }
}

const zooRoutes = new ZooRoutes();
export default zooRoutes.router;
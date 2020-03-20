import express, { Application } from 'express';
import zooRoutes from './routes/zooRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/',zooRoutes);

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port 3000');
        });
    }
}

const server = new Server();
server.start();
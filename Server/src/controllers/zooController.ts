import { Request, Response } from 'express';
import pool from '../database';

class ZooController {

    public async list (req: Request, res: Response ): Promise<void> {
        const animals = await pool.query('SELECT * FROM ANIMALS');
        res.json(animals);
    }

    public async getOne (req: Request, res: Response ): Promise<any> {
        const { id } = req.params;
        const animal = await pool.query('SELECT * FROM ANIMALS WHERE id = ?', [id]);
        if (animal.length > 0){
            return res.json(animal[0]);
        }
        res.status(404).json({text: "The animal doesn't exist"});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO ANIMALS set ?', [req.body]);
        res.json({message: 'Animal Saved'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE ANIMALS set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Animal updated'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ANIMALS WHERE id = ?', [id]);
        res.json({message: 'Animal deleted'});
    }
}

export const zooController = new ZooController();
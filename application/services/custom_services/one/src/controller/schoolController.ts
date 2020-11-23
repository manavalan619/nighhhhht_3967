import { Request, Response } from 'express';
import { schoolService } from '../service/schoolService';
import { CustomLogger } from '../config/Logger'
let school = new schoolService();

export class schoolController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
school.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpSearch');
    })}
public GpGetAllValues(req: Request, res: Response) {
school.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
school.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpCreate');
    })}
public GpUpdate(req: Request, res: Response) {
school.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpUpdate');
    })}
public GpDelete(req: Request, res: Response) {
school.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpDelete');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
school.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpSearchForUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
school.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpGetNounById');
    })}


}
import { Request, Response, NextFunction } from "express";
import { schoolController } from '../controller/schoolController';


export class Routes {
    private school: schoolController = new schoolController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/school/get/search').get(this.school.GpSearch);
app.route('/school').get(this.school.GpGetAllValues);
app.route('/school').post(this.school.GpCreate);
app.route('/school').put(this.school.GpUpdate);
app.route('/school/:id').delete(this.school.GpDelete);
app.route('/school/get/update').put(this.school.GpSearchForUpdate);
app.route('/school/:id').get(this.school.GpGetNounById);
     }

}
import { Request, Response } from 'express';
import {schoolDao} from '../dao/schoolDao';
import { CustomLogger } from '../config/Logger'
let school = new schoolDao();

export class schoolService {
    
    constructor() { }
    
    public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpSearch')
     const  schoolData = req.query;
     school.GpSearch(schoolData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpSearch')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpGetAllValues')
     
     school.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpCreate')
     const  schoolData = req.body;
     school.GpCreate(schoolData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpCreate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpUpdate')
     const  schoolData = req.body;
     school.GpUpdate(schoolData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpUpdate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpDelete')
     const  schoolId = req.params.id;
     school.GpDelete(schoolId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpSearchForUpdate')
     const  schoolData = req.body;
     school.GpSearchForUpdate(schoolData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpGetNounById')
     const  schoolId = req.params.id;
     school.GpGetNounById(schoolId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpGetNounById')
         callback(response);
         });
    }


}
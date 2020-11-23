import * as mongoose from 'mongoose';
import schoolModel from '../models/school';
import { CustomLogger } from '../config/Logger'


export class schoolDao {
    private school = schoolModel;
    constructor() { }
public GpSearch(schoolData, callback){
new CustomLogger().showLogger('info', 'Enter into schoolDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(schoolData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.school.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into schoolDao.ts: GpGetAllValues')

this.school.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(schoolData, callback){
new CustomLogger().showLogger('info', 'Enter into schoolDao.ts: GpCreate')
let temp = new schoolModel(schoolData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(schoolData, callback){
new CustomLogger().showLogger('info', 'Enter into schoolDao.ts: GpUpdate')

this.school.findOneAndUpdate({ _id: schoolData._id }, schoolData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(schoolId, callback){
new CustomLogger().showLogger('info', 'Enter into schoolDao.ts: GpDelete')

this.school.findByIdAndRemove(schoolId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(schoolData, callback){
new CustomLogger().showLogger('info', 'Enter into schoolDao.ts: GpSearchForUpdate')

this.school.findOneAndUpdate({ _id: schoolData._id }, schoolData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(schoolId, callback){
new CustomLogger().showLogger('info', 'Enter into schoolDao.ts: GpGetNounById')

this.school.findById(schoolId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}


}
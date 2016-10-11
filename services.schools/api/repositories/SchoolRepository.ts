import * as mongoose from 'mongoose';
import schoolSchema from '../models/School';

let School = mongoose.model('School', schoolSchema);

export class SchoolRepository {

    public static findAll(): Promise<mongoose.Document[]> {
        return new Promise((resolve: Function, reject: Function) => {
            School.find((err: any, res: mongoose.Document[]) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }

                resolve(res);
            });
        })

    }


    public static findByName(nameSearch: String): Promise<mongoose.Document[]> {
        return new Promise((resolve: Function, reject: Function) => {
            var query = { "name": { $regex: ".*" + nameSearch + ".*", $options: "i" } };

            School.find(query, (err: any, schools: mongoose.Document[]) => {
                if (err) {
                    reject(err);
                }

                resolve(schools);
            });
        });
    }
    
}

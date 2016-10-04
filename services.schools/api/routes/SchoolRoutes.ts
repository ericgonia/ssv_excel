import * as express from 'express';
import * as School from '../models/School';

export class SchoolRoutes {
    static init(router: express.Router) {
        router.route('/schools')
            .get((req: any, res: any) => {
                var query = {};
                if (typeof req.query.name !== "undefined" && req.query.name !== "") {
                    query = { "name": { $regex: ".*" + req.query.name + ".*", $options: "i" } };
                }

                School.find(query, (err: any, schools: any) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(schools);
                    }
                });
            });
    }
}

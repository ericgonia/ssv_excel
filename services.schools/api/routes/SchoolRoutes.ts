import * as express from 'express';
import {SchoolRepository} from '../repositories/SchoolRepository';

export class SchoolRoutes {
    
    static init(router: express.Router) {
        router.route('/schools')
            .get((request: any, response: any) => {
                if (typeof request.query.name !== "undefined" && request.query.name !== "") {
                    SchoolRepository.findByName(request.query.name)
                        .then(schools => response.status(200).json(schools))
                        .catch(error => response.status(500).json(error))
                } else {
                    SchoolRepository.findAll()
                        .then(schools => response.status(200).json(schools))
                        .catch(error => response.status(500).json(error))
                }

            });
    }

}

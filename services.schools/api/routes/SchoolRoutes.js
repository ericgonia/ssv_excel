"use strict";
var SchoolRepository_1 = require('../repositories/SchoolRepository');
var SchoolRoutes = (function () {
    function SchoolRoutes() {
    }
    SchoolRoutes.init = function (router) {
        router.route('/schools')
            .get(function (req, res) {
            if (typeof req.query.name !== "undefined" && req.query.name !== "") {
                SchoolRepository_1.SchoolRepository.findByName(req.query.name)
                    .then(function (schools) { return res.status(200).json(schools); })
                    .catch(function (error) { return res.status(500).json(error); });
            }
            else {
                SchoolRepository_1.SchoolRepository.findAll()
                    .then(function (schools) { return res.status(200).json(schools); })
                    .catch(function (error) { return res.status(500).json(error); });
            }
        });
    };
    return SchoolRoutes;
}());
exports.SchoolRoutes = SchoolRoutes;
//# sourceMappingURL=SchoolRoutes.js.map
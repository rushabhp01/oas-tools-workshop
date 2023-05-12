import * as service from '../services/environment_statsService.js';

export function getEnvironment_stats(req, res) {
    service.getEnvironment_stats(req, res);
}

export function findByyear(req, res) {
    service.findByyear(req, res);
}


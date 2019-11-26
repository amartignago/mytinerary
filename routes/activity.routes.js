const activityController = require ('../controllers/activity.controller')
const router = require ('express').Router()

router.get("/activities/", activityController.getActivities);
router.get("/activities/:itinID", activityController.getActivitiesByItin);



module.exports = router


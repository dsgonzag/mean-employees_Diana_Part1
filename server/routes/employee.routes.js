const express=require('express');
const router=express.Router();

const employee = require('../controllers/employee.controller')

router.get('/',employee.getEmployee);
router.post('/', employee.createEmployee);
router.get('/:id', employee.getEmployeee);
router.put('/:id', employee.editEmployeee);
router.delete('/:id',employee.deleteEmployeee);

module.exports=router;
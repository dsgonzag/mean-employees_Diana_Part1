
const Employeee= require('../models/employee');
const employeeCtrl= {};

employeeCtrl.getEmployee = async (req, res)=>{
    /* res.json({
        status: 'Employee goes here'
    }); */
    const employees = await Employeee.find()
    res.json(employees);

};
employeeCtrl.createEmployee = async(req, res)=>{
    const employeee=new Employeee(req.body);
    await employeee.save();
    res.json({
        'status': 'Employee Saved'
    });

    
};

employeeCtrl.getEmployeee= async(req, res)=>{
    
    const employee=await Employeee.findById(req.params.id);
    res.json(employee);
}
employeeCtrl.editEmployeee= async(req, res)=>{
    const {id}=req.params;
    const employee={
        name: req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    };
    await Employeee.findByIdAndUpdate(id, { $set: employee}, {new:true});
    res.json({status: 'Employee Updated'})
};

employeeCtrl.deleteEmployeee= async(req, res)=>{
 await  Employeee.findByIdAndRemove(req.params.id);
 res.json({status:'Employee Deleted'})
};
module.exports=employeeCtrl;
module.exports.input=(req,res)=>{
   ans={
      message: null,
      status:null,
      data:{
         validation:{
            error: null,
            field: null,
            field_value: null,
            condition: null,
            condition_value: null
         }
      }
   }
   var data=req.body.data
   var rule=req.body.rule

   if (!rule){
      err(res, 'rule is required.')
   }
   if (!data){
      err(res, 'data is required.')
   }if(typeof rule!=='object'){
      err(res, 'rule should be an object.')
   }if (!rule.field){
      err(res, 'field dosent exist and is required.')
   }if (typeof rule.field !=='string'){
      err(res,'rule.field sould be a string')
   }
   if (!(data[rule.field])){
      message=rule.field+' field is missing from data provided.'
      err(res, message)
   }if(!rule.condition){
      err(res, 'condition dosent exist and is required.')
   }if(!rule.condition_value){
      err(res, 'condition_value dosent exist and is required.')
   }
   if (typeof rule.field !=='string' && Array.isArray(data) !=='true'){
      err(res, 'field should be a string.')
   }
   if (typeof rule.condition !=='string'){
      err(res, 'your rule_condition should be a string.')
   }
   if (typeof data ==='object'){
      if (rule.condition==='eq'){
         if (data[rule.field]===rule.condition_value){
            success(res,rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res,rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="neq"){
         if (data[rule.field]!==rule.condition_value){
            success(res,rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res,rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="gt"){
         if (data[rule.field]>rule.condition_value){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res,rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="gte"){
         if (data[rule.field]>=rule.condition_value){
            success(res,rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res,rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="contains"){
         if (data[rule.field].includes(rule.condition_value)){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else{
         ans.message='your rule_condition should contain any of these arguments [eq, neq, gt, gte, contains].'
         ans.status='error'
         ans.data=null
         response(res, ans)
      }
   }else if (typeof data === 'string'){
      if (rule.condition==='eq'){
         if (data[parseInt(rule.field)]===rule.condition_value){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="neq"){
         if (data[parseInt(rule.field)]!==rule.condition_value){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="gt"){
         if (data[parseInt(rule.field)]>rule.condition_value){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="gte"){
         if (data[parseInt(rule.field)]>=rule.condition_value){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="contains"){
         if (data[parseInt(rule.field)].includes(rule.condition_value)){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else{
         ans.message='your rule_condition should contain any of these arguments [eq, neq, gt, gte, contains].'
         ans.status='error'
         ans.data=null
         response(res, ans)
      }
   }else if(Array.isArray(data)){
      if (rule.condition==='eq'){
         if (data[parseInt(rule.field)]===rule.condition_value){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="neq"){
         if (data[parseInt(rule.field)]!==rule.condition_value){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="gt"){
         if (data[parseInt(rule.field)]>rule.condition_value){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="gte"){
         if (data[parseInt(rule.field)]>=rule.condition_value){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else if (rule.condition==="contains"){
         if (data[parseInt(rule.field)].includes(rule.condition_value)){
            success(res, rule.field, data[rule.field], rule.condition, rule.condition_value)    
         }else{
            failure(res, rule.field, data[rule.field], rule.condition, rule.condition_value)  
         }
      }else{
         ans.message='your rule_condition should contain any of these arguments [eq, neq, gt, gte, contains].'
         ans.status='error'
         ans.data=null
         response(res, ans)
      }
   }else{
      ans.message='your data is of the wrong format.'
      ans.status='error'
      ans.data=null
      response(res, ans)
   }
}

module.exports.output=(req,res)=>{ 
   ans={
      message:'My Rule-Validation API.',
      status:'success',
      data:{
         name: 'Joel Dan Inaku',
         github: '@Joel-16',
         email: 'inakujoel16@gmail.com',
         mobile: '09065942500',
         twitter: '@inaku_joel'
      }
   }
   response(res,ans)
}
var response=(res,data)=>{
   res.json(data)
}
var success=(res, x, y, c, z)=>{
   ans.message="field ["+x+"] successfully validated."
   ans.status="success" 
   ans.data.validation.error="false"
   ans.data.validation.field=x
   ans.data.validation.field_value=y
   ans.data.validation.condition=c
   ans.data.validation.condition_value=z
   response(res, ans)      
}
var failure=(res,x,y,c,z)=>{
   ans.message="field ["+x+"] failed validation."
   ans.status="error" 
   ans.data.validation.error="true"
   ans.data.validation.field=x
   ans.data.validation.field_value=y
   ans.data.validation.condition=c
   ans.data.validation.condition_value=z
   response(res, ans)
}
var err=(res, message)=>{
   ans.message=message
   ans.status='error';
   ans.data=null;
   response(res, ans)
}
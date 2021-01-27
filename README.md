# Validation
# Overview
A simple API that validates a given set of data, based on pre-determined rules

# Constraints
This API accepts strickly JSON as its input
example:
``` 
{
    rule:{
        field:  [desired field to search for in the data object]
        condition:  any one of these[eq, neq, gt, gte, contains]
        condition_value: > [your desired arguments]
        }
    data: any one of these data_types[object, Array, String]
    
}
```
# **Note:**
1. keys of the rule object cannot be substituted, it must be used as it is
2. All values of all keys are strings
# live
https://valid123.herokuapp.com/
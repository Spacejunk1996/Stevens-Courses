const dic = require('./dictionary');

try {
    console.log(dic.lookupDefinition("programming"));
}catch (error){
    console.log(error);
}
try{
    console.log(dic.getWord("The action or process of writing computer programs."))
}catch (error){
    console.log(error)
}
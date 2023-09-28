// underscore_case to camelCase converter(will take an array of underscore_words and the function below will return a camelCase words
const underscorecaseToCamelcase = function(varNames){
  for(const words of varNames){
    let lowerCaseWordArray = words.trim().toLowerCase().split('_');
    const [firstName,lastName] = lowerCaseWordArray;
    lastNameInCamel = lastName.replace(lastName[0], lastName[0].toUpperCase());
    console.log(firstName+lastNameInCamel );  
  }
}

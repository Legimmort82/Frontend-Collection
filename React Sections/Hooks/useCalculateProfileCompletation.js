const useCalculateProfileCompletion = (profile,fields) => {
    const completedFields = fields.filter(field => profile[field]);
    return (completedFields.length / fields.length) * 100;
  };
  
  export default useCalculateProfileCompletion;
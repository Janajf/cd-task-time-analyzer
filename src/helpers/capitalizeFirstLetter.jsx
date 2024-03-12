const capitalizeFirstLetter = (name) =>{
    if(name !=null){
        return name.charAt(0).toUpperCase() + name.split('').splice(1).join('');
    }
    
  }

  export default capitalizeFirstLetter;
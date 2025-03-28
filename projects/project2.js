const form= document.querySelector('form')
//this usecase will give you empty
//const height= parseInt(document.querySelector('#height:').value)
//default action rok lo form ka
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('.results')


if(height==='' || height<0 || isNaN(height)){
  results.innerHTML= `Please enter a valid height ${height}`

}
else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML= `Please enter a valid weight ${weight}`
  }
  const BMI= (weight/((height*height)/10000)).toFixed(3)
  //show the result 
  results.innerHTML= `<span>${BMI}</span>`
  let message = "";
  if (BMI < 18.6) {
      message = "Underweight";
  } else if (BMI >= 18.6 && bmi <= 24.9) {
      message = "Normal weight";
  } else {
      message = "Overweight";
  }

  results.innerHTML = `Your BMI is <strong>${BMI}</strong> (${message})`;
})
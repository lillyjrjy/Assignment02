let lan = prompt('choose a language by entering one or the following two letter codes("es", "de", "en", and "fr")')
let en = true
if(lan === 'es' )
{
    console.log('Hello World translated in spanish is: Hola Mundo')
    en = false
} 
 if(lan ==='de'){
        console.log('Hello World translated in german is: Hallo Welt')
        en = false
      }
   if(lan ==='fr'){
        console.log('Hello World translated in French is: Bonjour le monde')
        en = false
      }
  if(en){
        console.log('Hello World')
    }
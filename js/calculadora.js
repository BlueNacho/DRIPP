function Operaciones(costo){
            var costo = document.getElementById("costo").value;
            var precio_inicial = parseInt(costo);
            var numero_real = true
            var fecha_input= document.getElementById("calendario").value
            console.log(fecha_input)
            var f = new Date(fecha_input)
            var año= f.getFullYear()
            console.log(año)

           if(precio==''){
                numero_real = false;
            }
            
            if(numero_real == true){
                
               if (document.getElementsByClassName("nacional").checked) { 
                   if (document.getElementById ("subsidiado").checked) {
                       document.getElementById("Total").value = precio_inicial;
                   } else {
                        if(document.getElementById("Montevideo").selected == true) {
                           document.getElementById("Total").value =  precio*0.15 + (precio_inicial);
                            
                        } else { 
                       document.getElementById("Total").value =  precio *0.10 + (precio_inicial);
                        }
                   }
                    
                    
                   } else {
                       if (document.getElementsByClassName("importado").checked){
                        
                           if(año <= 2008) {
                               document.getElementById("Total").value =  precio*0.10 + (precio_inicial);
                           } else {
                               document.getElementById("Total").value =  precio*0.20 + (precio_inicial);
                           }
                            
                           
                       }
                 
            }
                
            } 
          }
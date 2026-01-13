 let encabezados=["Horas", "Previsión", "Viento", "Velocidad", "Lluvias"];         
        let datos=[
            {
            hora:"19:00",
            prevision:{ temperatura: "33º", icono:"dia" },
            viento:"oeste",
            velocidad:"15 km/h",
            lluvias:"0 mm"
            },
            {
            hora:"20:00",
            prevision:{ temperatura: "30º", icono:"dia" },
            viento:"norte",
            velocidad:"5 km/h",
            lluvias:"10 mm"
            },
            {
            hora:"21:00",
            prevision:{ temperatura: "28º", icono:"noche" },
            viento:"sur",
            velocidad:"0 km/h",
            lluvias:"5 mm"
            },

        ];
            let codigoFila = "";  

            encabezados.forEach(element => {
            codigoFila += "<th>" + element + "</th>";
        });

            const fila = document.createElement('tr');
            fila.innerHTML = codigoFila;
            document.querySelector('thead').appendChild(fila);
              

            datos.forEach(element => {
                let viento1=element.viento;
                if (viento1=="sur") {
                    
                    viento1='<img src="img/sur.png">';

                }
                        if (viento1=="norte") {
                    
                    viento1='<img src="img/norte.png">';

                }
                        if (viento1=="este") {
                    
                    viento1='<img src="img/este.png">';

                }
                        if (viento1=="oeste") {
                    
                    viento1='<img src="img/oeste.png">';

                }
                let hora1=element.hora;
                let hora2=hora1.split(":")
                let hora3=hora2[0];
              let temperatura1=  element.prevision.temperatura;
              let icono1=  element.prevision.icono;
                if (hora3>8 && hora3<21) {
                             
                    icono1='<img src="img/sol.png">';
                } else {
                       icono1='<img src="img/luna.png">';
                }
            codigoFila2 = "<td>" + element.hora+ "</td>"+"<td>" + temperatura1 + " "+icono1+"</td>"+"<td>"+viento1+"</td>"+"<td>"+element.velocidad+"</td>"+"<td style='color: blue;'>" + element.lluvias + "</td>"
;
             const fila = document.createElement('tr');
            fila.innerHTML = codigoFila2;
            document.querySelector('thead').appendChild(fila);
        });

            

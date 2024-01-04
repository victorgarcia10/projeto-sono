function analisando(){
    let nome = window.document.getElementById('txtn')
    let idade = window.document.getElementById('txti')
    let qhorad = window.document.getElementById('txtd')
    let res = window.document.querySelector('div#res')
       if(nome.value.length === 0 || idade.value.length === 0 || qhorad.value.length ===0){
               window.alert(`[ERRO] Faltam dados a serem preenchidos`)

       }else{
            let ida = Number(idade.value)   
            let horad = Number(qhorad.value)  
            let fsex = window.document.getElementsByName('radsex')
            let img = window.document.createElement('img')
            const diah = 24
            const dvida = ida *365
            const hvida = dvida * diah
            const hdormida = dvida * horad
            img.setAttribute('id', 'foto')
            let genero = ''
            let msg = '' 
               if(fsex[0].checked){
                       genero = 'Homem'
                               if(ida >0 && ida <= 2){
                                msg += ` É ${genero} e considerado um bebe`
                                img.setAttribute('src', './assets/fotobebehomem.png')
                                window.document.body.style.backgroundColor = '#CBC2B9'

                               }else if(ida >2 && ida <=10){
                                 msg = ` É ${genero} e considerado criança`
                                 img.setAttribute('src', './assets/fotomenino.png')
                                 window.document.body.style.backgroundColor = '#2E5159'

                               }else if(ida >10 && ida <=19){
                                msg = ` É ${genero} e considerado Adolescente`
                                img.setAttribute('src', './assets/fotojovemmenino.png')
                                window.document.body.style.backgroundColor = '#594302'

                               }else if(ida >19 && ida <=40){
                                msg = ` É ${genero}  e considerado Adulto `
                                img.setAttribute('src', './assets/fotohomemadulto.png')       
                                window.document.body.style.backgroundColor = '#A2A633'

                               }else if(ida >40 && ida <=60){
                                 msg = ` É ${genero}  e considerado de meia idade` 
                                 img.setAttribute('src', './assets/fotohomemmeiaidade.png')
                                 window.document.body.style.backgroundColor = '#914D48'

                               }else if(ida > 60 && ida <=100){
                                 msg= ` É ${genero} e é Considerado Idoso`  
                                 img.setAttribute('src', './assetsfotohomemidoso.png') 
                                 window.document.body.style.backgroundColor = '#BF455B'   

                               }else{
                                 msg = `[ERRO] Você não está vivo `
                                 img.setAttribute('src', './assets/nafrodita.png')
                                 window.document.body.style.backgroundColor = '#0D0D0D'

                               }

               }else if(fsex[1].checked){
                       genero = 'Mulher'

                              if(ida >0 && ida <= 2){
                               msg += ` É ${genero} e considerado um bebe`
                               img.setAttribute('src', './assets/fotobebemulher.png')
                               window.document.body.style.backgroundColor = '#D97B73'

                              }else if(ida >2 && ida <=10){
                                msg = ` É ${genero} e considerado criança`
                                img.setAttribute('src', './assets/fotomenina.png')
                                window.document.body.style.backgroundColor = '#D973BE'

                              }else if(ida >10 && ida <=19){
                               msg = ` É ${genero} e considerado Adolescente`
                               img.setAttribute('src', './assets/fotojovemmenina.png')
                               window.document.body.style.backgroundColor = '#BB9D77'

                              }else if(ida >19 && ida <=40){
                               msg = ` É ${genero}  e considerado Adulta `
                               img.setAttribute('src', './assets/fotomulheradulta.png')       
                               window.document.body.style.backgroundColor = '#B3AD96'

                              }else if(ida >40 && ida <=60){
                                msg = ` É ${genero}  e considerado de meia idade` 
                                img.setAttribute('src', './assets/fotomulhermeiaidade.png')
                                window.document.body.style.backgroundColor = '#F0F1F2'

                              }else if(ida > 60 && ida <=100){
                                msg= ` É ${genero} e é Considerado Idosa`  
                                img.setAttribute('src', './assets/fotomulheridosa.png') 
                                window.document.body.style.backgroundColor = '#262B25'   

                              }else{
                                msg = `[ERRO] Você não está vivo `
                                img.setAttribute('src', './assets/nafrodita.png')
                                window.document.body.style.backgroundColor = '#583528'

                              }

               }

               res.innerHTML = `<p> Olá <strong>${nome.value}</strong> Voce tem <strong>${ida}</strong> Anos <strong>${msg}</strong> e dorme <strong>${horad}</strong> horas por dia.</p>`
               res.appendChild(img)
               res.innerHTML += `<p>Até hoje você viveu <strong>${dvida}</strong> dias;  e tem até agora <strong>${hvida}</strong> horas de vida; e dormiu<strong> ${hdormida}</strong> horas na vida </p> `
       }

}
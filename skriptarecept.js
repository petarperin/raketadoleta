let nizRecepta=[{
    naziv:"karbonara",vrsta:"glavno",opis:"dfghjkliuyt guhyb ",autor:"sara",trajanje:"0-30min",tezina:3,ocena:4,slika:"slike/karbonara.jpeg"
    
    },{
        naziv:"lazanje",vrsta:"glavno",opis:"dfghjkliuyt guhyb ",autor:"sara",trajanje:"0-30min",tezina:4,ocena:5,slika:"slike/lazanje.jpg"
        
        }];
        let nizKOmentara=[{
            autor:"",komentar:"",hrana:""            
            }];

    let nizSlikaHrane=[{
         hrana:"lazanje",slika:"slike/lazanje2.webp"           
        },{
            hrana:"lazanje",slika:"slike/lazanje3.jpg"           
           },{
            hrana:"vocna salata",slika:"slike/voce2.jpg"           
           },{
               hrana:"vocna salata",slika:"slike/voce3.jpg"           
              },{
                hrana:"karbonara",slika:"slike/karb2.jpg"           
               },{
                   hrana:"karbonara",slika:"slike/karb3.jpg"           
                  },{
                    hrana:"margarita",slika:"slike/marg2.jpg"           
                   },{
                       hrana:"margarita",slika:"slike/marg3.jpg"           
                      },{
                        hrana:"krofne",slika:"slike/krof2.webp"           
                       },{
                           hrana:"krofne",slika:"slike/krof3.jpg"           
                          },{
                            hrana:"sufle",slika:"slike/suf2.jpg"           
                           },{
                               hrana:"sufle",slika:"slike/suf3.jpg"           
                              },{
                                hrana:"mafini",slika:"slike/maf2.jpg"           
                               },{
                                   hrana:"mafini",slika:"slike/maf3.jpg"           
                                  },{
                                    hrana:"junjeca salata",slika:"slike/ju2.webp"           
                                   },{
                                       hrana:"junjeca salata",slika:"slike/ju3.jpg"           
                                      },{
                                        hrana:"kuglice sa sirom",slika:"slike/ku2.webp"           
                                       },{
                                           hrana:"kuglice sa sirom",slika:"slike/ku3.jpg"           
                                          },{
                                            hrana:"slana torta",slika:"slike/sla2.webp"           
                                           },{
                                               hrana:"slana torta",slika:"slike/sla3.jpg"           
                                              },{
                                                hrana:"integralni hleb",slika:"slike/hleb2.jpg"           
                                               },{
                                                   hrana:"integralni hleb",slika:"slike/hleb3.jpg"           
                                                  },{
                                                    hrana:"porcija povrca",slika:"slike/pov2.jpg"           
                                                   },{
                                                       hrana:"porcija povrca",slika:"slike/pov3.jpg"           
                                                      }];
           function inicrec(){
               
            let je=localStorage.getItem("jezik");
               
                if(je==null){
                    localStorage.setItem("jezik",'srp');
                    
                }
                else{
                    jezik=je;
                    
                }
                 
                if(jezik=='srp'){
                    document.getElementById("radio1").checked = true;;
                    document.getElementById("navpoc").innerHTML = "Pocetna";
                    document.getElementById("navpro").innerHTML = "Moj profil";
                    document.getElementById("navre").innerHTML = "Recepti";
                    document.getElementById("navdod").innerHTML = "Dodaj recept";
                    document.getElementById("navo").innerHTML = "O nama";
                    // document.getElementById("nas1").innerHTML = "Kultni simbol Beograda "+<br>+"Čuveni gradski boemi su, još davnih dana, odabrali naš restoran kao mesto na kom su počinjali i završavali dan.";
                     
                }
                else if(jezik=='eng'){
                    document.getElementById("radio2").checked = true;;
                    document.getElementById("navpoc").innerHTML = "Home";
                    document.getElementById("navpro").innerHTML = "My profile";
                    document.getElementById("navre").innerHTML = "Recipes";
                    document.getElementById("navdod").innerHTML = "Add recipe";
                    document.getElementById("navo").innerHTML = "About us";
    
                    document.getElementById("reccep").innerHTML = "Recipe"; 
                    document.getElementById("ocenii").innerText = "Rate";
                    document.getElementById("nazziv").innerHTML = "Name: "; 
                    document.getElementById("vrrsta").innerHTML = "Type: "; 
                    document.getElementById("receppt").innerHTML = "Recipe: "; 
                    document.getElementById("trajaa").innerHTML = "duration: "; 
                    document.getElementById("tezii").innerHTML = "difficulty: ";
                    document.getElementById("occena").innerHTML = "rate: ";
                    document.getElementById("fut").innerHTML = "Copyright 2021, Sara Kolarevic and Aleksa Janjic, University of Belgrade,School of Electrical Engineering, Software Engineering";
                    document.getElementById("komentarisiieng").innerHTML = "Leave a comment"; 
                    document.getElementById("komentariiiljudi").innerHTML = "Comments"; 
                    document.getElementById("slikekorr").innerHTML = "User pictures"; 
                    document.getElementById("tekstslikakor").innerHTML = "Did you make this dish?Perfect!Take a picture of your masterpiece and share it with others!"; 
                    document.getElementById("slikazagaleriju").innerText = "Choose a picture";
                    
                }
        };
           var slideIndex = 1;
        
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }
    $(document).ready(function(){
        // jQuery(function(){
        //     $(".slideshow-container").append($("<div></div>").addClass("mySlides").addClass("fade").append($("<div></div>").addClass("numbertext")).append($("<img></img>").attr("src", "slike/lazanje.jpg")));
        //     $(".slideshow-container").append($("<div></div>").addClass("mySlides").addClass("fade").append($("<div></div>").addClass("numbertext")).append($("<img></img>").attr("src", "slike/margarita.jpg")));
        //     $(".slideshow-container").append($("<div></div>").addClass("mySlides").addClass("fade").append($("<div></div>").addClass("numbertext")).append($("<img></img>").attr("src", "slike/margarita.jpg")));
        //     $("#tackice").append($("<span></span>").addClass("dot").attr('onclick','currentSlide(1)'));
        // });
        dodajRecept();
        function dodajRecept(){
            
            let recepti=localStorage.getItem("recepti");
        if(recepti==null){
            localStorage.setItem("recepti",JSON.stringify(nizRecepta));
            
        }
        else{
            nizRecepta=JSON.parse(recepti);
            
        }
        let komen=localStorage.getItem("komentari");
        if(komen==null){
            localStorage.setItem("komentari",JSON.stringify(nizKOmentara));
            
        }
        else{
            nizKOmentara=JSON.parse(komen);
            
        }
        let recept=localStorage.getItem("izabranRecept");
        let trenutni;
            for(let i=0;i<nizRecepta.length;i++){
                if(nizRecepta[i].naziv==recept){ trenutni=nizRecepta[i];}
            }
            $("#ubacirec").html(""+trenutni.naziv);
            $("#tablenaziv").html(""+trenutni.naziv);
            $("#tablevrstaa").html(""+trenutni.vrsta);
            $("#tablevrsta").html(""+trenutni.vrsta);
            $("#tableopis").html(""+trenutni.opis);
            $("#tabletrajanje").html(""+trenutni.trajanje);
            $("#tabletezina").html(""+trenutni.tezina);
            $("#tableautor").html(""+trenutni.autor);
            $("#tableocena").html(""+trenutni.ocena);
            if(trenutni.autor!='sara')$("#brisanje").hide();
            
            $("#slikaRecept").attr("src", trenutni.slika);
            $("#videoRecept").attr("src", trenutni.video);
            $("#videoTag")[0].load();

            for(let i=0;i<nizKOmentara.length;i++){
                if(nizKOmentara[i].hrana==trenutni.naziv){
                    
                    // $("#komentaritable").append($("<tr><td>"+nizKOmentara[i].autor+"</td><td>"+nizKOmentara[i].komentar+"</td></tr>")); 
                    $("#komentaritable").append($("<tr><td>"+nizKOmentara[i].autor+" :  "+nizKOmentara[i].komentar+"</td></tr>")); 
                }
            }

            let sl=localStorage.getItem("slikehrane");
            if(sl==null){
                localStorage.setItem("slikehrane",JSON.stringify(nizSlikaHrane));
                
            }
            else{
                nizSlikaHrane=JSON.parse(sl);
                
            }
            let pom=1;
            for(let i=0;i<nizSlikaHrane.length;i++){
                if(nizSlikaHrane[i].hrana==trenutni.naziv){
                    ////////////////
                    $(".slideshow-container").append($("<div></div>").addClass("mySlides").append($("<div></div>").addClass("numbertext")).append($("<img></img>").addClass("slikehrane").attr("src", ""+nizSlikaHrane[i].slika)));
                    $("#tackice").append($("<span></span>").addClass("dot").attr('onclick','currentSlide('+pom
                    +')'));
                    pom=pom+1;
                }
            }
            showSlides(1);

        }; 

        $('input[type=radio][name=radio]').change(function() {
            if (this.value == 'eng') {
                // alert("Allot Thai Gayo Bhai");
                let je=localStorage.getItem("jezik");
           
                if(je==null){
                    localStorage.setItem("jezik",jezik);
                    
                }
                else{
                    jezik=je;
                    
                }
                if(jezik=='eng')return;
                jezik='eng';
                localStorage.setItem("jezik",jezik);
                // inicindex();
                location.reload();
            }
            else if (this.value == 'srp') {
                // alert("Transfer Thai Gayo");
                let je=localStorage.getItem("jezik");
           
                        if(je==null){
                            localStorage.setItem("jezik",jezik);
                            
                        }
                        else{
                            jezik=je;
                            
                        }
                        if(jezik=='srp')return;
                        jezik='srp';
                        localStorage.setItem("jezik",jezik);
                        // inicindex();
                        location.reload();
            }
        });


        $("#komentarisii").click(function(){
            
            let komentext=$("#koment").val();
          //   let hrana;
            let recept=localStorage.getItem("izabranRecept");
       
          // for(let i=0;i<nizRecepta.length;i++){
          //     if(nizRecepta[i].naziv==recept){ hrana=nizRecepta[i];}
          // }
          nizKOmentara.push({autor:'sara',komentar:komentext,hrana:recept});
          localStorage.setItem('komentari',JSON.stringify(nizKOmentara));
          $("#koment").val('');
          location.reload();
        });
        $("#brisanje").click(function(){
            
             
        let recept=localStorage.getItem("izabranRecept");
        let trenutni;
        let pom=0;
            for(let i=0;i<nizRecepta.length;i++){
                if(nizRecepta[i].naziv==recept){ trenutni=nizRecepta[i]; pom=i;}
            }
          nizRecepta.splice(pom,1);
          localStorage.setItem('recepti',JSON.stringify(nizRecepta));
          
          
          window.location.href="recepti.html";
        });

        $("#ocenii").click(function(){
            
            let ocen=parseInt(prompt('ocenite 1-5'));
          //   let hrana;
          if(Number.isNaN(ocen)==true){
          alert('Morate uneti broj'); return;}
          if(ocen>5 || ocen<=0){
            alert('Morate uneti broj veci od 0 i manji od 6'); return;}

            let recept=localStorage.getItem("izabranRecept");
            let trenutni;
            for(let i=0;i<nizRecepta.length;i++){
                if(nizRecepta[i].naziv==recept){ trenutni=nizRecepta[i];}
            }
            trenutni.ocena=(trenutni.ocena*trenutni.brojocena+ocen)/(trenutni.brojocena+1);
            trenutni.brojocena+=1;
         
           localStorage.setItem('recepti',JSON.stringify(nizRecepta));
        
          location.reload();
        });


        // $("#galerijaslika").click(function(){
            
        //    let s;//dohvati sliku
        //     let recept=localStorage.getItem("izabranRecept");
        
        //   nizSlikaHrane.push({slika:s,hrana:recept});
        //   localStorage.setItem('slikehrane',JSON.stringify(nizSlikaHrane));
          
        // });
        $("#pdff").click(function(){
            // alert("p");
            var doc = new jsPDF();
            let recept=localStorage.getItem("izabranRecept");
            let trenutni;
            for(let i=0;i<nizRecepta.length;i++){
                if(nizRecepta[i].naziv==recept){ trenutni=nizRecepta[i];}
            }
            let txt=trenutni.naziv+"\n";
            txt+="Autor : " + trenutni.autor+"\nTezina: " + trenutni.tezina+"\nVreme trajanja je: " + trenutni.trajanje+"\nVrsta jela je: " + trenutni.vrsta+"\Recept jela je: " + trenutni.opis;
            doc.text(20, 60, txt);
            doc.save(trenutni.naziv + '.pdf');
          });
    });

    var loadPicture = function(event) {
        izabranRecept = localStorage.getItem("izabranRecept");

        slikehrane = JSON.parse(localStorage.getItem("slikehrane"));
        elem = {
            hrana : izabranRecept,
            slika : "slike/" + event.target.files[0].name
        }
        slikehrane.push(elem);
        localStorage.setItem("slikehrane", JSON.stringify(slikehrane));
        location.reload();
    };
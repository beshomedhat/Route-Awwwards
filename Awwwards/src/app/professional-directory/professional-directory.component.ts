import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-directory',
  templateUrl: './professional-directory.component.html',
  styleUrls: ['./professional-directory.component.css']
})
export class ProfessionalDirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let newNavHeight =4;

    newNavHeight+=parseInt( $('nav').css("height"));

    $('nav').css("height", `${newNavHeight}`);
    $('nav').css("padding-top","0px");
    $('nav').css("padding-bottom","0px");
    var slide1=false;
    var slide2=false;
    $('#dropdownMenuButton').click(function()
    {
        $('#dropdownMenuButton').css("box-shadow","none");
        $('#dropdownMenuButton').css("background-color","black");
        $("#menu2").slideUp(0.2,function()
        { 
            slide2=false;
            
            if(slide1==false)
            {
                $('#menu1').slideDown();
                $('.menuOverlay').fadeTo(1000,0.4);
                slide1=true;

            }
            
            else if(slide1==true)
            {
                if(slide2==false)
                {
                    $('.menuOverlay').fadeOut();
                }
                $('#menu1').slideUp();
                slide1=false;
                
            }
            
        });

    })
        
    $('#dropdownMenuButton2').click(function()
    {
        
        $('#dropdownMenuButton2').css("box-shadow","none");
        $('#dropdownMenuButton2').css("background-color","black");
        $("#menu1").slideUp(0.2,function()
        { 
            slide1=false;
            
        if(slide2==false)
            {
                $('#menu2').slideDown();
                $('.menuOverlay').fadeTo(1000,0.4);
                slide2=true;

            }
            
            else if(slide2==true)
            {
                if(slide1==false)
                {
                    $('.menuOverlay').fadeOut();
                }
                $('#menu2').slideUp();
                slide2=false;           
            }
        });
    })
  }

}

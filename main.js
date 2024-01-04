// let dog={
//   breed:"Golden Retriever",
//   height: "15 cm",

// };
// document.write(dog.breed);
const scrollRevealOption = {
          distance: "50px",
          origin: "bottom",
          duration: 1000,
        };
        
        // header container
        ScrollReveal().reveal(".content h1", {
          ...scrollRevealOption,
          delay: 400,
        });
        ScrollReveal().reveal(".content p", {
          ...scrollRevealOption,
          delay: 600,
        });
        ScrollReveal().reveal(".image", {
          ...scrollRevealOption,
          delay: 200,
        });
        ScrollReveal().reveal(".content h1", {
          ...scrollRevealOption,
          delay: 500,
        });
      
        // testimonial container
        ScrollReveal().reveal(".test__card", {
          ...scrollRevealOption,
          interval: 500,
        });


        ScrollReveal().reveal(".action__btns", {
          ...scrollRevealOption,
          delay: 800,
        }
        );
        document.getElementById('downloadButton').addEventListener('click',function(){
          var downloadLink= document.createElement('a');
          downloadLink.href='KrishnaResume.pdf.png';
          downloadLink.download='Resume';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        })
        document.getElementById('Contact').addEventListener('click', function() {
          // Replace 'path/to/your/destination-page.html' with the correct path to your destination page
          var destinationPage = 'contact.html';
          
          // Redirect to the destination page
          window.location.href = destinationPage;
      });

        

        
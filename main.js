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
        });

        
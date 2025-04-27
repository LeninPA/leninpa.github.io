
const currentUrl = window.location.href;
const siteUrl = "https://leninpa.github.io"; 
let updatedUrl = currentUrl.replace("https://leninpa.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("es-mx".length > 0) {
  updatedUrl = updatedUrl.replace("/es-mx", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Menú de navegación",
    handler: () => {
      window.location.href = "/es-mx/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "Nunca confundas el dedo con la luna",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es-mx/blog/";
          },
        },{id: "nav-publicaciones",
          title: "publicaciones",
          description: "publicaciones categorizadas en orden cronológico inverso. Generadas por jekyll-scholar.",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es-mx/publications/";
          },
        },{id: "nav-proyectos",
          title: "proyectos",
          description: "Una colección creciente de algunos proyectos.",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es-mx/projects/";
          },
        },{id: "nav-repositorios",
          title: "repositorios",
          description: "Repositorios y perfil de GitHub",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es-mx/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Este es un CV que intenta abarcar toda mi vida. Para una versión corta puedes descargar el resumé disponible en la parte superior.",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es-mx/cv/";
          },
        },{id: "nav-docencia",
          title: "docencia",
          description: "Portafolio docente digital en formato libre",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es-mx/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/es-mx/people/";
          },
        },{id: "dropdown-libros",
              title: "libros",
              description: "",
              section: "Menú desplegable",
              handler: () => {
                window.location.href = "/es-mx/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Menú desplegable",
              handler: () => {
                window.location.href = "/es-mx/blog/";
              },
            },{id: "post-apuntes-de-diseño-instruccional",
        
          title: "Apuntes de diseño instruccional",
        
        description: "Notes of DCIM course from Faculty of Medicine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/es-mx/blog/2025/teaching-portfolio/";
          
        },
      },{id: "post-is-the-sum-of-all-integers-a-negative-number",
        
          title: "Is the sum of all integers a negative number?",
        
        description: "A warning to always be rigorous",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/es-mx/blog/2025/infinite/";
          
        },
      },{id: "post-gemini-2-5-our-newest-gemini-model-with-thinking",
        
          title: 'Gemini 2.5: Our newest Gemini model with thinking <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Gemini 2.5 is our most intelligent AI model, now with thinking.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/", "_blank");
          
        },
      },{id: "books-el-padrino",
          title: 'El padrino',
          description: "",
          section: "",handler: () => {
              window.location.href = "/es-mx/books/es-mx/the_godfather/";
            },},{id: "news-aceptado-como-becario-de-supercómputo-en-la-dgtic-unam",
          title: 'Aceptado como Becario de Supercómputo en la DGTIC@UNAM',
          description: "",
          section: "Noticias",handler: () => {
              window.location.href = "/es-mx/news/es-mx/announcement_1/";
            },},{id: "news-recibí-mi-cédula-profesional-como-técnico-en-computación-sparkles-smile",
          title: 'Recibí mi Cédula Profesional como Técnico en Computación :sparkles: :smile:',
          description: "",
          section: "Noticias",},{id: "news-inicio-ayudantía-con-la-dra-fittipaldi-y-la-dra-saraí",
          title: 'Inicio ayudantía con la Dra. Fittipaldi y la Dra. Saraí',
          description: "",
          section: "Noticias",},{id: "news-inicio-como-ayudante-de-lab-con-miguel-ángel-pérez-de-león",
          title: 'Inicio como ayudante de lab con Miguel Ángel Pérez de León',
          description: "",
          section: "Noticias",},{id: "news-inicié-como-ayudante-con-el-dr-simental-dando-lineal-2",
          title: 'Inicié como ayudante con el Dr. Simental, dando Lineal 2.',
          description: "",
          section: "Noticias",},{id: "projects-p6anki",
          title: 'P6Anki',
          description: "Anki deck for Minimal English",
          section: "Proyectos",handler: () => {
              window.location.href = "/es-mx/projects/2_project/";
            },},{id: "projects-undergrad-thesis-at-the-interface-of-nsm-and-ai",
          title: '(Undergrad Thesis) At the Interface of NSM and AI',
          description: "A computational research with the NSM framework focused in minoritised languages",
          section: "Proyectos",handler: () => {
              window.location.href = "/es-mx/projects/es-mx/1_project/";
            },},{id: "teaching-módulo-2-and-4-web-development-bootcamp",
          title: 'Módulo 2 and 4. Web Development Bootcamp',
          description: "Relational Databases and Accessible Web Design",
          section: "",handler: () => {
              window.location.href = "/es-mx/teaching/es-mx/1_teaching/";
            },},{id: "teaching-probability-i-introduction-to-probability",
          title: 'Probability I (Introduction to Probability)',
          description: "Fall 2024 (2025-1)",
          section: "",handler: () => {
              window.location.href = "/es-mx/teaching/es-mx/2_teaching/";
            },},{id: "teaching-probability-ii-advanced-probability",
          title: 'Probability II (Advanced Probability)',
          description: "Spring 2025",
          section: "",handler: () => {
              window.location.href = "/es-mx/teaching/es-mx/3_teaching/";
            },},{id: "teaching-python-with-project-based-learning",
          title: 'Python with Project Based Learning',
          description: "Spring 2025",
          section: "",handler: () => {
              window.location.href = "/es-mx/teaching/es-mx/4_teaching/";
            },},{id: "teaching-linear-algebra-ii-advanced-linear-algebra",
          title: 'Linear Algebra II (Advanced Linear Algebra)',
          description: "Spring 2025",
          section: "",handler: () => {
              window.location.href = "/es-mx/teaching/es-mx/5_teaching/";
            },},{id: "teaching-parallel-programming",
          title: 'Parallel Programming',
          description: "Spring 2025",
          section: "",handler: () => {
              window.location.href = "/es-mx/teaching/es-mx/6_teaching/";
            },},{
        id: 'social-email',
        title: 'Enviar email',
        section: 'Redes Sociales',
        handler: () => {
          window.open("mailto:%6C%70%61%76%6F%6E@%61%73%74%72%6F.%75%6E%61%6D.%6D%78", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Redes Sociales',
        handler: () => {
          window.open("https://github.com/LeninPA", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Redes Sociales',
        handler: () => {
          window.open("https://www.linkedin.com/in/lenin-pavon", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Redes Sociales',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Lenguajes',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Cambiar al tema claro',
      description: 'Cambiar el sitio web a modo claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Cambiar al tema oscuro',
      description: 'Cambiar el sitio web a modo oscuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usa el tema por defecto',
      description: 'Cambiar el sitio web al tema por defecto del sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];

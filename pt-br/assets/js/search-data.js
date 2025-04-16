
const currentUrl = window.location.href;
const siteUrl = "https://leninpa.github.io"; 
let updatedUrl = currentUrl.replace("https://leninpa.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("pt-br".length > 0) {
  updatedUrl = updatedUrl.replace("/pt-br", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "sobre",
    section: "Menu de navegação",
    handler: () => {
      window.location.href = "/pt-br/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "um tema simples para acadêmicos",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/blog/";
          },
        },{id: "nav-publicações",
          title: "publicações",
          description: "publicações por categoria em ordem cronológica reversa. gerado pelo jekyll-scholar.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/publications/";
          },
        },{id: "nav-projetos",
          title: "projetos",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/projects/";
          },
        },{id: "nav-repositórios",
          title: "repositórios",
          description: "Edite o `_data/repositories.yml` e mude as listas `github_users` e `github_repos` para incluir seu próprio perfil do GitHub e repositórios.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Esta é uma descrição da página. Você pode modificá-la em &#39;_pages/cv.md&#39;. Também pode alterar ou remover o botão no topo de download de pdf.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/cv/";
          },
        },{id: "nav-ensino",
          title: "ensino",
          description: "Materiais de cursos que você ministrou. Substitua esse texto com sua descrição.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/teaching/";
          },
        },{id: "nav-membros",
          title: "membros",
          description: "membros do grupo de pesquisa ou laboratório",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/people/";
          },
        },{id: "dropdown-publicações",
              title: "publicações",
              description: "",
              section: "Outras opções",
              handler: () => {
                window.location.href = "/pt-br/publications/";
              },
            },{id: "dropdown-projetos",
              title: "projetos",
              description: "",
              section: "Outras opções",
              handler: () => {
                window.location.href = "/pt-br/projects/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Outras opções",
              handler: () => {
                window.location.href = "/pt-br/blog/";
              },
            },{id: "post-is-the-sum-of-all-integers-a-negative-number",
        
          title: "Is the sum of all integers a negative number?",
        
        description: "A warning to always be rigorous",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/pt-br/blog/2025/infinite/";
          
        },
      },{id: "post-gemini-2-5-our-newest-gemini-model-with-thinking",
        
          title: 'Gemini 2.5: Our newest Gemini model with thinking <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Gemini 2.5 is our most intelligent AI model, now with thinking.",
        section: "Postagens",
        handler: () => {
          
            window.open("https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/pt-br/books/pt-br/the_godfather/";
            },},{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "Novidades",},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "Novidades",handler: () => {
              window.location.href = "/pt-br/news/pt-br/announcement_2/";
            },},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Novidades",},{id: "news-began-working-as-a-ta-unam-for-miguel-ángel-pérez-de-león",
          title: 'Began working as a TA@UNAM for Miguel Ángel Pérez de León',
          description: "",
          section: "Novidades",},{id: "projects-p6anki",
          title: 'P6Anki',
          description: "Anki deck for Minimal English",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/2_project/";
            },},{id: "projects-projeto-1",
          title: 'projeto 1',
          description: "com imagem de fundo",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/1_project/";
            },},{
        id: 'social-email',
        title: 'Enviar um email',
        section: 'Redes sociais',
        handler: () => {
          window.open("mailto:%6C%70%61%76%6F%6E@%61%73%74%72%6F.%75%6E%61%6D.%6D%78", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Redes sociais',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-fr-ca',
          title: 'fr-ca',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "/fr-ca" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Muda o tema para claro',
      description: 'Muda o tema do site para claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Muda o tema para escuro',
      description: 'Muda o tema do site para escuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usa o tema padrão do sistema',
      description: 'Muda o tema do site para o padrão do sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];

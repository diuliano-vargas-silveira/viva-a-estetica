const user = localStorage.getItem("user");
let posts = [];

async function getPosts() {
  // const fetchResponse = await fetch(`http://localhost:8080/user/${user}`);

  // alert("Chamou");

  // if (!fetchResponse.ok) {
  //   alert("Não há posts presente");
  //   return;
  // }

  // const response = await fetchResponse.json();

  // posts = response.posts;

  posts = [
    {
      imagem:
        "https://blog.meupersonalvirtual.com.br/wp-content/uploads/2019/10/309300-leticia-favor-entregar-ate-279-malhando-certo-encontre-o-equilibrio-entre-a-amplitude-de-movimento-e-a-carga.jpg",
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YFJH-SQRfmb7jim4ZdXN1UhY112yvGFRBg&usqp=CAU",
      id: "1"
    },
    {
      imagem:
        "https://cte7.com.br/wp-content/uploads/2015/06/Dicas-de-roupas-para-malhar.jpg",
      userImage:
        "https://cte7.com.br/wp-content/uploads/2015/06/Dicas-de-roupas-para-malhar.jpg",
      id: "2"
    },
    {
      imagem:
        "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://blog.quisty.com.br/wp-content/uploads/2017/09/123152-moda-masculina-aprenda-a-escolher-a-melhor-roupa-para-malhar-1024x683.jpg",
      userImage:
        "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://blog.quisty.com.br/wp-content/uploads/2017/09/123152-moda-masculina-aprenda-a-escolher-a-melhor-roupa-para-malhar-1024x683.jpg",
      id: "3"
    },
    {
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YFJH-SQRfmb7jim4ZdXN1UhY112yvGFRBg&usqp=CAU",
      userImage:
        "https://i.pinimg.com/736x/be/a0/fc/bea0fc0148c27dabfd338c64568e1373.jpg",
      id: "4"
    },
    {
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YFJH-SQRfmb7jim4ZdXN1UhY112yvGFRBg&usqp=CAU",
      userImage:
        "https://img.freepik.com/fotos-gratis/mulher-malhando-na-academia_23-2148111517.jpg?w=2000",
      id: "5"
    }
  ];
}

getPosts();

const lista = document.getElementById("posts");

if (posts.length > 0) {
  posts.forEach((post) => {
    const item = document.createElement("div");
    item.id = post.id;
    item.className = "post";

    const userImage = document.createElement("img");
    userImage.src = post.userImage;
    userImage.alt = post.userImage;
    userImage.className = "userImage";

    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";

    const image = document.createElement("img");
    image.src = post.imagem;
    image.alt = "";
    image.className = "postImage";

    imageContainer.appendChild(image);

    item.appendChild(userImage);
    item.appendChild(imageContainer);

    lista.appendChild(item);
  });
}

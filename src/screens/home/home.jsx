import { useState, useEffect } from 'react'

import { Footer, Header } from "../../components/";
import { Posts } from "./components/posts/posts";

const POSTS = [
  {
    image:
      "https://blog.meupersonalvirtual.com.br/wp-content/uploads/2019/10/309300-leticia-favor-entregar-ate-279-malhando-certo-encontre-o-equilibrio-entre-a-amplitude-de-movimento-e-a-carga.jpg",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YFJH-SQRfmb7jim4ZdXN1UhY112yvGFRBg&usqp=CAU",
    id: "1"
  },
  {
    image:
      "https://cte7.com.br/wp-content/uploads/2015/06/Dicas-de-roupas-para-malhar.jpg",
    userImage:
      "https://cte7.com.br/wp-content/uploads/2015/06/Dicas-de-roupas-para-malhar.jpg",
    id: "2"
  },
  {
    image:
      "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://blog.quisty.com.br/wp-content/uploads/2017/09/123152-moda-masculina-aprenda-a-escolher-a-melhor-roupa-para-malhar-1024x683.jpg",
    userImage:
      "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://blog.quisty.com.br/wp-content/uploads/2017/09/123152-moda-masculina-aprenda-a-escolher-a-melhor-roupa-para-malhar-1024x683.jpg",
    id: "3"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YFJH-SQRfmb7jim4ZdXN1UhY112yvGFRBg&usqp=CAU",
    userImage:
      "https://i.pinimg.com/736x/be/a0/fc/bea0fc0148c27dabfd338c64568e1373.jpg",
    id: "4"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YFJH-SQRfmb7jim4ZdXN1UhY112yvGFRBg&usqp=CAU",
    userImage:
      "https://img.freepik.com/fotos-gratis/mulher-malhando-na-academia_23-2148111517.jpg?w=2000",
    id: "5"
  }
]

export function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(POSTS)
  }, [])


  return <div className="container">
    <Header title="PROGRESSO PESSOAL" />

    <main className='posts__main'>
      <Posts posts={posts} />
    </main>

    <Footer />
  </div >
}
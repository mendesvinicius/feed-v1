import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';


export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Vinicius Mendes',
        avatar: 'https://http2.mlstatic.com/foto-desenho-para-o-seu-perfil-das-redes-sociais-D_NQ_NP_848819-MLB27185740300_042018-F.jpg',
        time: 'há 3 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        name: 'Alice Silva',
        avatar: 'https://cdn.awsli.com.br/1000x1000/932/932769/produto/34757351/d0b0b6d416.jpg',
        time: 'há 27 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
      {
        id: 2,
        name: 'Felipe Lima',
        avatar: 'https://http2.mlstatic.com/foto-desenho-para-o-seu-perfil-das-redes-sociais-D_NQ_NP_614041-MLB27185740295_042018-O.jpg',
        time: 'há 46 min',
        body:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      }
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
            {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
